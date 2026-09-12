// Mapping for all 15 MP3 lecture files hosted in Google Drive folder:
// https://drive.google.com/drive/folders/1VL2cdkyVoaHLT3kJSv6Pr1PAEDEEmcj9?usp=drive_link

export interface DriveLectureAudio {
  lessonNumber: number;
  fileName: string;
  driveFileId: string;
  drivePreviewUrl: string;
  directStreamUrl: string;    // Direct inline audio stream (avoids attachment headers & 303 redirect)
  fallbackStreamUrl: string;  // Fallback inline stream URL
  directDownloadUrl: string;  // Direct download URL
}

function makeAudio(lessonNumber: number, fileName: string, fileId: string): DriveLectureAudio {
  return {
    lessonNumber,
    fileName,
    driveFileId: fileId,
    drivePreviewUrl: `https://drive.google.com/file/d/${fileId}/preview`,
    directStreamUrl: `https://drive.usercontent.google.com/download?id=${fileId}&export=open`,
    fallbackStreamUrl: `https://drive.google.com/uc?export=open&id=${fileId}`,
    directDownloadUrl: `https://drive.usercontent.google.com/download?id=${fileId}&export=download`,
  };
}

export const GOOGLE_DRIVE_LECTURE_AUDIOS: Record<number, DriveLectureAudio> = {
  0: makeAudio(0, 'ROM_Lecture_00_MEN_062026_MC.mp3', '15fkbCDknOAg3MNR16uWTQh1U8idDENbJ'),
  1: makeAudio(1, 'ROM_Lecture_01_MEN_062026_MC.mp3', '11HLja4YyW_v6gKYCEP5P6QVoYrbYDDQ9'),
  2: makeAudio(2, 'ROM_Lecture_02_MEN_062026_MC.mp3', '1tPZMIORpri9chbXdOv3wv0I6rhLXOcYz'),
  3: makeAudio(3, 'ROM_Lecture_03_MEN_062026_MC.mp3', '1tQx8yi6DniFC0IzgZF_VfcEhMDQEAW1E'),
  4: makeAudio(4, 'ROM_Lecture_04_MEN_062026_MC.mp3', '1YzAlwNlEBcK2WWq74t7iKz0rHc4b6Mfp'),
  5: makeAudio(5, 'ROM_Lecture_05_MEN_062026_MC.mp3', '1RKiVrlyZF1TT0VuGwvzlXNtgpmzVU11z'),
  6: makeAudio(6, 'ROM_Lecture_06_MEN_062026_MC.mp3', '1kvoL1SfbtjYP_2b_vivbXHMKaNm9D0le'),
  7: makeAudio(7, 'ROM_Lecture_07_MEN_062026_MC.mp3', '1mfqmWoPhJTGqiCqO4BGk3Pw_m2emi54x'),
  8: makeAudio(8, 'ROM_Lecture_08_MEN_062026_MC.mp3', '1Q79VFYxD4UOqYEpOdvbP1z7GGDCscsSB'),
  9: makeAudio(9, 'ROM_Lecture_09_MEN_062026_MC.mp3', '1-Ua7SViWD-NbGhXVH3yJ7ypze8v6aWPv'),
  10: makeAudio(10, 'ROM_Lecture_10_MEN_062026_MC.mp3', '1h3wBK75InIJHaMqEU8wCV-m7RF8GjtRl'),
  11: makeAudio(11, 'ROM_Lecture_11_MEN_062026_MC.mp3', '1wf3IsbHI9PNWQF8MdUzeY26Zf3g5dOoM'),
  12: makeAudio(12, 'ROM_Lecture_12_062026_MEN_MC.mp3', '14ViXQ4H9t2s-r6t3lLGuSa0a49XtdJJh'),
  13: makeAudio(13, 'ROM_Lecture_13_062026_MEN_MC.mp3', '1-qFmhga1EfExzFYXU1qaiZciHnBvYOVd'),
  14: makeAudio(14, 'ROM_Lecture_14_062026_MEN_MC.mp3', '1Ch3HVYRWKcrA39fy8P-2K_IQ4wPeNmKY'),
};

export const GOOGLE_DRIVE_FOLDER_URL =
  'https://drive.google.com/drive/folders/1VL2cdkyVoaHLT3kJSv6Pr1PAEDEEmcj9?usp=drive_link';

export function hasLectureAudio(lessonNumber: number): boolean {
  return !!GOOGLE_DRIVE_LECTURE_AUDIOS[lessonNumber];
}

export function getLectureAudio(lessonNumber: number): DriveLectureAudio | undefined {
  return GOOGLE_DRIVE_LECTURE_AUDIOS[lessonNumber];
}
