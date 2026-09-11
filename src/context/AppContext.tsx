import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import {
  Language,
  PageId,
  AudioLecture,
  ContactLeader,
  LearnerProgress,
  UserProfile,
  UserHomileticsSubmission
} from '../types';
import {
  BSF_AUDIO_LECTURES,
  BSF_CONTACTS,
  INITIAL_LEARNERS,
  BSF_CLASS_CALENDARS
} from '../data/bsfData';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  selectedCalendarId: string;
  setSelectedCalendarId: (id: string) => void;

  // Audio Player
  currentLecture: AudioLecture | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  playbackRate: number;
  volume: number;
  playLecture: (lecture: AudioLecture) => void;
  togglePlay: () => void;
  seekTo: (sec: number) => void;
  skip: (sec: number) => void;
  setPlaybackRate: (rate: number) => void;
  setVolume: (vol: number) => void;
  currentSpokenTranscript: string;
  customAudioSources: { [fileName: string]: string };
  setCustomAudioSource: (fileName: string, url: string) => void;

  // Weekly Bundle Modal State
  activeWeeklyBundleWeek: number | null;
  openWeeklyBundle: (week: number) => void;
  closeWeeklyBundle: () => void;

  // Viewer & Session Time Tracking
  sessionSeconds: number;
  totalViewerSeconds: number;

  // User Profile & Progress
  currentUser: UserProfile;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserProfile>>;
  learners: LearnerProgress[];
  currentLearnerProgress: LearnerProgress;
  homileticsSubmissions: { [week: number]: UserHomileticsSubmission };
  saveHomileticsDraft: (week: number, fields: Partial<UserHomileticsSubmission>) => void;
  submitHomiletics: (week: number) => void;
  toggleLectureCompleted: (week: number) => void;
  toggleReadingCompleted: (week: number) => void;

  // Contact Modal
  isContactModalOpen: boolean;
  selectedContactLeader: ContactLeader | null;
  openContactModal: (leader?: ContactLeader) => void;
  closeContactModal: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Language preference
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('bsf_language');
    return (saved === 'en' || saved === 'zh') ? saved : 'zh';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('bsf_language', lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  // Navigation
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedCalendarId, setSelectedCalendarId] = useState<string>(BSF_CLASS_CALENDARS[0].id);

  // Audio Player State
  const [currentLecture, setCurrentLecture] = useState<AudioLecture | null>(BSF_AUDIO_LECTURES[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(BSF_AUDIO_LECTURES[0].audioDurationSeconds);
  const [playbackRate, setPlaybackRateState] = useState<number>(1);
  const [volume, setVolumeState] = useState<number>(0.8);
  const [currentSpokenTranscript, setCurrentSpokenTranscript] = useState<string>('');
  const [customAudioSources, setCustomAudioSources] = useState<{ [fileName: string]: string }>({});

  const setCustomAudioSource = (fileName: string, url: string) => {
    setCustomAudioSources(prev => ({ ...prev, [fileName]: url }));
  };

  // Weekly Bundle Modal State
  const [activeWeeklyBundleWeek, setActiveWeeklyBundleWeek] = useState<number | null>(null);
  const openWeeklyBundle = (week: number) => {
    setActiveWeeklyBundleWeek(week);
  };
  const closeWeeklyBundle = () => {
    setActiveWeeklyBundleWeek(null);
  };

  // Audio HTML5 element and Speech Synthesis references
  const audioElRef = useRef<HTMLAudioElement | null>(null);
  const speechUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const timerRef = useRef<number | null>(null);

  // Initialize hidden HTML5 audio element on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && !audioElRef.current) {
      const el = new Audio();
      el.preload = 'auto';
      audioElRef.current = el;
    }
    return () => {
      if (audioElRef.current) {
        audioElRef.current.pause();
        audioElRef.current.src = '';
      }
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Session Time Tracker
  const [sessionSeconds, setSessionSeconds] = useState<number>(0);
  const [totalViewerSeconds, setTotalViewerSeconds] = useState<number>(() => {
    const saved = localStorage.getItem('bsf_total_viewer_seconds');
    return saved ? parseInt(saved, 10) : 7420;
  });

  // Current User
  const [currentUser, setCurrentUser] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('bsf_current_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // ignore
      }
    }
    return {
      id: 'user-001',
      name: 'Devin Wang',
      email: 'devinw.cn@gmail.com',
      classId: '062-MEN-Tue',
      groupName: '男班第3组 (Tuesday Men Group 3)'
    };
  });

  // Learners progress list
  const [learners, setLearners] = useState<LearnerProgress[]>(() => {
    const saved = localStorage.getItem('bsf_learners');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // ignore
      }
    }
    return INITIAL_LEARNERS;
  });

  // Homiletics drafts & submissions
  const [homileticsSubmissions, setHomileticsSubmissions] = useState<{ [week: number]: UserHomileticsSubmission }>(() => {
    const saved = localStorage.getItem('bsf_homiletics_submissions');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // ignore
      }
    }
    return {
      2: {
        week: 2,
        divisions: '罗 1:18-23 压制真理与偶像虚妄\n罗 1:24-27 神三次任凭与道德沉沦\n罗 1:28-32 存邪僻心与公义审判',
        subjectSentence: '神忿怒显明，因世人故意弃绝造物主真理。',
        aim: '促使学员认清罪的可怕本质，单单敬畏并仰赖神的恩典福音。',
        outline: 'I. 压制真理带来的心智蒙蔽 (1:18-23)\nII. 离开神荣耀招致的道德自食其果 (1:24-27)\nIII. 最终无可推诿的公义审判 (1:28-32)',
        applications: '1. 我在日常生活中有没有把金钱、事业或自我认同当作取代神的偶像？\n2. 面对周围世俗思潮的冲击，我如何勇敢见证纯正福音？',
        updatedAt: '2026-09-06 18:30',
        isSubmitted: true
      }
    };
  });

  // Contact Modal
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
  const [selectedContactLeader, setSelectedContactLeader] = useState<ContactLeader | null>(null);

  const openContactModal = (leader?: ContactLeader) => {
    setSelectedContactLeader(leader || BSF_CONTACTS[1]); // default to Devin Wang or provided
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  // Active session timer - updates every second
  useEffect(() => {
    const interval = window.setInterval(() => {
      setSessionSeconds(prev => {
        const next = prev + 1;
        if (next % 10 === 0) {
          setTotalViewerSeconds(tot => {
            const updated = tot + 10;
            localStorage.setItem('bsf_total_viewer_seconds', updated.toString());
            return updated;
          });
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Sync learners state with total viewer seconds for currentUser
  useEffect(() => {
    setLearners(prev =>
      prev.map(l => (l.userId === currentUser.id ? { ...l, totalViewerSeconds } : l))
    );
  }, [totalViewerSeconds, currentUser.id]);

  // Audio Playback Simulation & Web Audio synthesis
  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioContextClass();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  const startTone = () => {
    try {
      initAudio();
      if (!audioCtxRef.current) return;

      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
      }

      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Warm organ meditative chord base (F# chord gentle fundamental)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(174.61, ctx.currentTime); // F3 warm tone

      // Soft amplitude so it's a pleasant ambient listening experience
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08 * volume, ctx.currentTime + 1.5);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      oscillatorRef.current = osc;
      gainNodeRef.current = gain;
    } catch (e) {
      console.warn('Web Audio synthesis initial note failed', e);
    }
  };

  const stopTone = () => {
    try {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, audioCtxRef.current.currentTime);
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.3);
        setTimeout(() => {
          if (oscillatorRef.current) {
            oscillatorRef.current.stop();
            oscillatorRef.current.disconnect();
            oscillatorRef.current = null;
          }
        }, 350);
      }
    } catch (e) {
      // ignore
    }
  };

  // Generate realistic speech narration of the lecture
  const speakCurrentLecture = (lecture: AudioLecture) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const isZh = language === 'zh';
      const textToSpeak = isZh
        ? `BSF 2026至2027学年罗马书查经释经讲座。主讲人：${lecture.speakerZh}。今天研读：${lecture.titleZh}。经文范围：${lecture.scriptureZh}。核心真理：${lecture.summaryZh}。第一要点：${lecture.keyPointsZh[0]}。第二要点：${lecture.keyPointsZh[1]}。第三要点：${lecture.keyPointsZh[2]}。本周背诵经文：${lecture.memoryVerseZh}。愿神藉着祂公义与恩典的真理，亲自更新并坚固我们的信心。`
        : `BSF 2026-2027 School Year. Romans Expository Lecture Series. Teacher: ${lecture.speakerEn}. Lesson: ${lecture.titleEn}. Scripture: ${lecture.scriptureEn}. Core spiritual truth: ${lecture.summaryEn}. Point one: ${lecture.keyPointsEn[0]}. Point two: ${lecture.keyPointsEn[1]}. Point three: ${lecture.keyPointsEn[2]}. Weekly memory verse: ${lecture.memoryVerseEn}.`;

      setCurrentSpokenTranscript(textToSpeak);

      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = isZh ? 'zh-CN' : 'en-US';
      utterance.rate = playbackRate;
      utterance.volume = volume;

      speechUtteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.warn('speechSynthesis failed', err);
    }
  };

  // Play progress runner
  useEffect(() => {
    if (isPlaying && currentLecture) {
      // 1. Play custom audio source if available on HTML5 audio element
      const customSrc = customAudioSources[currentLecture.fileName];
      if (audioElRef.current && customSrc) {
        if (audioElRef.current.src !== customSrc) {
          audioElRef.current.src = customSrc;
        }
        audioElRef.current.playbackRate = playbackRate;
        audioElRef.current.volume = volume;
        audioElRef.current.currentTime = currentTime;
        audioElRef.current.play().catch(e => console.log('Audio playback error', e));
      } else {
        // 2. Speak the authentic sermon audio if speech synthesis available
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
          if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
          } else if (!window.speechSynthesis.speaking) {
            speakCurrentLecture(currentLecture);
          }
        }
        // 3. Ambient sanctuary organ tone accompaniment
        startTone();
      }

      timerRef.current = window.setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false);
            stopTone();
            if (audioElRef.current) audioElRef.current.pause();
            if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
              window.speechSynthesis.cancel();
            }
            return 0;
          }
          return prev + 1 * playbackRate;
        });
      }, 1000 / playbackRate);
    } else {
      stopTone();
      if (audioElRef.current) {
        audioElRef.current.pause();
      }
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.pause();
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      stopTone();
    };
  }, [isPlaying, playbackRate, duration, currentLecture, customAudioSources]);

  const playLecture = (lecture: AudioLecture) => {
    if (currentLecture?.week !== lecture.week) {
      setCurrentLecture(lecture);
      setCurrentTime(0);
      setDuration(lecture.audioDurationSeconds);
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      speakCurrentLecture(lecture);
    }
    setIsPlaying(true);

    // Also auto-mark lecture as listened after engaging
    setLearners(prev =>
      prev.map(l => {
        if (l.userId === currentUser.id && !l.completedLectures.includes(lecture.week)) {
          return { ...l, completedLectures: [...l.completedLectures, lecture.week] };
        }
        return l;
      })
    );
  };

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  const seekTo = (sec: number) => {
    const clamped = Math.max(0, Math.min(sec, duration));
    setCurrentTime(clamped);
    if (audioElRef.current) {
      audioElRef.current.currentTime = clamped;
    }
  };

  const skip = (sec: number) => {
    seekTo(currentTime + sec);
  };

  const setPlaybackRate = (rate: number) => {
    setPlaybackRateState(rate);
    if (audioElRef.current) {
      audioElRef.current.playbackRate = rate;
    }
  };

  const setVolume = (vol: number) => {
    setVolumeState(vol);
    if (audioElRef.current) {
      audioElRef.current.volume = vol;
    }
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(0.08 * vol, audioCtxRef.current.currentTime);
    }
  };

  // Current learner
  const currentLearnerProgress: LearnerProgress = learners.find(l => l.userId === currentUser.id) || {
    userId: currentUser.id,
    name: currentUser.name,
    email: currentUser.email,
    classId: currentUser.classId,
    groupName: currentUser.groupName,
    totalViewerSeconds,
    lastActive: 'Just now',
    completedLectures: [1, 2],
    completedReadings: [1, 2],
    homileticsStatus: { 2: 'submitted' },
    attendanceWeeks: [1, 2]
  };

  const saveHomileticsDraft = (week: number, fields: Partial<UserHomileticsSubmission>) => {
    setHomileticsSubmissions(prev => {
      const existing = prev[week] || {
        week,
        divisions: '',
        subjectSentence: '',
        aim: '',
        outline: '',
        applications: '',
        updatedAt: new Date().toISOString(),
        isSubmitted: false
      };
      const updated = {
        ...existing,
        ...fields,
        updatedAt: new Date().toLocaleString()
      };
      const next = { ...prev, [week]: updated };
      localStorage.setItem('bsf_homiletics_submissions', JSON.stringify(next));
      return next;
    });

    setLearners(prev =>
      prev.map(l => {
        if (l.userId === currentUser.id) {
          return {
            ...l,
            homileticsStatus: {
              ...l.homileticsStatus,
              [week]: l.homileticsStatus[week] === 'submitted' ? 'submitted' : 'draft'
            }
          };
        }
        return l;
      })
    );
  };

  const submitHomiletics = (week: number) => {
    setHomileticsSubmissions(prev => {
      const existing = prev[week] || {
        week,
        divisions: '',
        subjectSentence: '',
        aim: '',
        outline: '',
        applications: '',
        updatedAt: new Date().toISOString(),
        isSubmitted: false
      };
      const updated: UserHomileticsSubmission = {
        ...existing,
        isSubmitted: true,
        updatedAt: new Date().toLocaleString()
      };
      const next = { ...prev, [week]: updated };
      localStorage.setItem('bsf_homiletics_submissions', JSON.stringify(next));
      return next;
    });

    setLearners(prev =>
      prev.map(l => {
        if (l.userId === currentUser.id) {
          return {
            ...l,
            homileticsStatus: {
              ...l.homileticsStatus,
              [week]: 'submitted'
            }
          };
        }
        return l;
      })
    );
  };

  const toggleLectureCompleted = (week: number) => {
    setLearners(prev =>
      prev.map(l => {
        if (l.userId === currentUser.id) {
          const exists = l.completedLectures.includes(week);
          const nextLectures = exists
            ? l.completedLectures.filter(w => w !== week)
            : [...l.completedLectures, week];
          return { ...l, completedLectures: nextLectures };
        }
        return l;
      })
    );
  };

  const toggleReadingCompleted = (week: number) => {
    setLearners(prev =>
      prev.map(l => {
        if (l.userId === currentUser.id) {
          const exists = l.completedReadings.includes(week);
          const nextReadings = exists
            ? l.completedReadings.filter(w => w !== week)
            : [...l.completedReadings, week];
          return { ...l, completedReadings: nextReadings };
        }
        return l;
      })
    );
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        currentPage,
        setCurrentPage,
        selectedCalendarId,
        setSelectedCalendarId,
        currentLecture,
        isPlaying,
        currentTime,
        duration,
        playbackRate,
        volume,
        playLecture,
        togglePlay,
        seekTo,
        skip,
        setPlaybackRate,
        setVolume,
        currentSpokenTranscript,
        customAudioSources,
        setCustomAudioSource,
        activeWeeklyBundleWeek,
        openWeeklyBundle,
        closeWeeklyBundle,
        sessionSeconds,
        totalViewerSeconds,
        currentUser,
        setCurrentUser,
        learners,
        currentLearnerProgress,
        homileticsSubmissions,
        saveHomileticsDraft,
        submitHomiletics,
        toggleLectureCompleted,
        toggleReadingCompleted,
        isContactModalOpen,
        selectedContactLeader,
        openContactModal,
        closeContactModal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
