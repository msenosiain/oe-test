import { Component, OnInit } from '@angular/core';
import { IProgress } from './progress/progress';

@Component({
  selector: 'oe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Should be populated from a service call
  progress: IProgress = {
    currentLevel: 5,
    nextLevel: 6,
    levelProgressPercent: 40.25,
    liveClassProgressPercent: 75,
    liveClassRequired: 12,
    liveClassTaken: 9,
    practiceProgressPercent: 50,
    practiceHoursRequired: 7,
    practiceHoursTaken: 3.5,
    lessonProgressPercent: 85.71,
    lessonRequired: 7,
    lessonTaken: 6
  };

  constructor() { }
}
