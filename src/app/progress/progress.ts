export interface IProgress {
    currentLevel: number;
    nextLevel: number;
    levelProgressPercent: number;
    liveClassProgressPercent: number;
    liveClassRequired: number;
    liveClassTaken: number;
    practiceProgressPercent: number;
    practiceHoursRequired: number;
    practiceHoursTaken: number;
    lessonProgressPercent: number;
    lessonRequired: number;
    lessonTaken: number;
}
