// Mapping for all 15 MP3 lecture files hosted in Google Drive folder:
// https://drive.google.com/drive/folders/1VL2cdkyVoaHLT3kJSv6Pr1PAEDEEmcj9?usp=drive_link

export interface DriveLectureAudio {
  lessonNumber: number;
  fileName: string;
  driveFileId: string;
  drivePreviewUrl: string;
  directDownloadUrl: string;
}

export const GOOGLE_DRIVE_LECTURE_AUDIOS: Record<number, DriveLectureAudio> = {
  0: {
    lessonNumber: 0,
    fileName: 'ROM_Lecture_00_MEN_062026_MC.mp3',
    driveFileId: '15fkbCDknOAg3MNR16uWTQh1U8idDENbJ',
    drivePreviewUrl: 'https://drive.google.com/file/d/15fkbCDknOAg3MNR16uWTQh1U8idDENbJ/preview',
    directDownloadUrl: 'https://drive.google.com/uc?export=download&id=15fkbCDknOAg3MNR16uWTQh1U8idDENbJ',
  },
  1: {
    lessonNumber: 1,
    fileName: 'ROM_Lecture_01_MEN_062026_MC.mp3',
    driveFileId: '11HLja4YyW_v6gKYCEP5P6QVoYrbYDDQ9',
    drivePreviewUrl: 'https://drive.google.com/file/d/11HLja4YyW_v6gKYCEP5P6QVoYrbYDDQ9/preview',
    directDownloadUrl: 'https://drive.google.com/uc?export=download&id=11HLja4YyW_v6gKYCEP5P6QVoYrbYDDQ9',
  },
  2: {
    lessonNumber: 2,
    fileName: 'ROM_Lecture_02_MEN_062026_MC.mp3',
    driveFileId: '1tPZMIORpri9chbXdOv3wv0I6rhLXOcYz',
    drivePreviewUrl: 'https://drive.google.com/file/d/1tPZMIORpri9chbXdOv3wv0I6rhLXOcYz/preview',
    directDownloadUrl: 'https://drive.google.com/uc?export=download&id=1tPZMIORpri9chbXdOv3wv0I6rhLXOcYz',
  },
  3: {
    lessonNumber: 3,
    fileName: 'ROM_Lecture_03_MEN_062026_MC.mp3',
    driveFileId: '1tQx8yi6DniFC0IzgZF_VfcEhMDQEAW1E',
    drivePreviewUrl: 'https://drive.google.com/file/d/1tQx8yi6DniFC0IzgZF_VfcEhMDQEAW1E/preview',
    directDownloadUrl: 'https://drive.google.com/uc?export=download&id=1tQx8yi6DniFC0IzgZF_VfcEhMDQEAW1E',
  },
  4: {
    lessonNumber: 4,
    fileName: 'ROM_Lecture_04_MEN_062026_MC.mp3',
    driveFileId: '1YzAlwNlEBcK2WWq74t7iKz0rHc4b6Mfp',
    drivePreviewUrl: 'https://drive.google.com/file/d/1YzAlwNlEBcK2WWq74t7iKz0rHc4b6Mfp/preview',
    directDownloadUrl: 'https://drive.google.com/uc?export=download&id=1YzAlwNlEBcK2WWq74t7iKz0rHc4b6Mfp',
  },
  5: {
    lessonNumber: 5,
    fileName: 'ROM_Lecture_05_MEN_062026_MC.mp3',
    driveFileId: '1RKiVrlyZF1TT0VuGwvzlXNtgpmzVU11z',
    drivePreviewUrl: 'https://drive.google.com/file/d/1RKiVrlyZF1TT0VuGwvzlXNtgpmzVU11z/preview',
    directDownloadUrl: 'https://drive.google.com/uc?export=download&id=1RKiVrlyZF1TT0VuGwvzlXNtgpmzVU11z',
  },
  6: {
    lessonNumber: 6,
    fileName: 'ROM_Lecture_06_MEN_062026_MC.mp3',
    driveFileId: '1kvoL1SfbtjYP_2b_vivbXHMKaNm9D0le',
    drivePreviewUrl: 'https://drive.google.com/file/d/1kvoL1SfbtjYP_2b_vivbXHMKaNm9D0le/preview',
    directDownloadUrl: 'https://drive.google.com/uc?export=download&id=1kvoL1SfbtjYP_2b_vivbXHMKaNm9D0le',
  },
  7: {
    lessonNumber: 7,
    fileName: 'ROM_Lecture_07_MEN_062026_MC.mp3',
    driveFileId: '1mfqmWoPhJTGqiCqO4BGk3Pw_m2emi54x',
    drivePreviewUrl: 'https://drive.google.com/file/d/1mfqmWoPhJTGqiCqO4BGk3Pw_m2emi54x/preview',
    directDownloadUrl: 'https://drive.google.com/uc?export=download&id=1mfqmWoPhJTGqiCqO4BGk3Pw_m2emi54x',
  },
  8: {
    lessonNumber: 8,
    fileName: 'ROM_Lecture_08_MEN_062026_MC.mp3',
    driveFileId: '1Q79VFYxD4UOqYEpOdvbP1z7GGDCscsSB',
    drivePreviewUrl: 'https://drive.google.com/file/d/1Q79VFYxD4UOqYEpOdvbP1z7GGDCscsSB/preview',
    directDownloadUrl: 'https://drive.google.com/uc?export=download&id=1Q79VFYxD4UOqYEpOdvbP1z7GGDCscsSB',
  },
  9: {
    lessonNumber: 9,
    fileName: 'ROM_Lecture_09_MEN_062026_MC.mp3',
    driveFileId: '1-Ua7SViWD-NbGhXVH3yJ7ypze8v6aWPv',
    drivePreviewUrl: 'https://drive.google.com/file/d/1-Ua7SViWD-NbGhXVH3yJ7ypze8v6aWPv/preview',
    directDownloadUrl: 'https://drive.google.com/uc?export=download&id=1-Ua7SViWD-NbGhXVH3yJ7ypze8v6aWPv',
  },
  10: {
    lessonNumber: 10,
    fileName: 'ROM_Lecture_10_MEN_062026_MC.mp3',
    driveFileId: '1h3wBK75InIJHaMqEU8wCV-m7RF8GjtRl',
    drivePreviewUrl: 'https://drive.google.com/file/d/1h3wBK75InIJHaMqEU8wCV-m7RF8GjtRl/preview',
    directDownloadUrl: 'https://drive.google.com/uc?export=download&id=1h3wBK75InIJHaMqEU8wCV-m7RF8GjtRl',
  },
  11: {
    lessonNumber: 11,
    fileName: 'ROM_Lecture_11_MEN_062026_MC.mp3',
    driveFileId: '1wf3IsbHI9PNWQF8MdUzeY26Zf3g5dOoM',
    drivePreviewUrl: 'https://drive.google.com/file/d/1wf3IsbHI9PNWQF8MdUzeY26Zf3g5dOoM/preview',
    directDownloadUrl: 'https://drive.google.com/uc?export=download&id=1wf3IsbHI9PNWQF8MdUzeY26Zf3g5dOoM',
  },
  12: {
    lessonNumber: 12,
    fileName: 'ROM_Lecture_12_062026_MEN_MC.mp3',
    driveFileId: '14ViXQ4H9t2s-r6t3lLGuSa0a49XtdJJh',
    drivePreviewUrl: 'https://drive.google.com/file/d/14ViXQ4H9t2s-r6t3lLGuSa0a49XtdJJh/preview',
    directDownloadUrl: 'https://drive.google.com/uc?export=download&id=14ViXQ4H9t2s-r6t3lLGuSa0a49XtdJJh',
  },
  13: {
    lessonNumber: 13,
    fileName: 'ROM_Lecture_13_062026_MEN_MC.mp3',
    driveFileId: '1-qFmhga1EfExzFYXU1qaiZciHnBvYOVd',
    drivePreviewUrl: 'https://drive.google.com/file/d/1-qFmhga1EfExzFYXU1qaiZciHnBvYOVd/preview',
    directDownloadUrl: 'https://drive.google.com/uc?export=download&id=1-qFmhga1EfExzFYXU1qaiZciHnBvYOVd',
  },
  14: {
    lessonNumber: 14,
    fileName: 'ROM_Lecture_14_062026_MEN_MC.mp3',
    driveFileId: '1Ch3HVYRWKcrA39fy8P-2K_IQ4wPeNmKY',
    drivePreviewUrl: 'https://drive.google.com/file/d/1Ch3HVYRWKcrA39fy8P-2K_IQ4wPeNmKY/preview',
    directDownloadUrl: 'https://drive.google.com/uc?export=download&id=1Ch3HVYRWKcrA39fy8P-2K_IQ4wPeNmKY',
  },
};

export const GOOGLE_DRIVE_FOLDER_URL =
  'https://drive.google.com/drive/folders/1VL2cdkyVoaHLT3kJSv6Pr1PAEDEEmcj9?usp=drive_link';
