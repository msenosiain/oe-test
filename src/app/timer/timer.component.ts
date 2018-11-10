import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'oe-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Input()
  seconds = 60;

  @Output()
  finish: EventEmitter<boolean> = new EventEmitter<boolean>();

  time;

  ngOnInit(): void {
    this.startCountDown(this.seconds);
  }

  startCountDown(seconds: number): void {
    this.finish.emit(false);
    const interval = setInterval(() => {
      this.time = new Date(--seconds * 1000);
      if (seconds <= 0) {
        // code here will run when the counter reaches zero.
        clearInterval(interval);
        this.finish.emit(true);
      }
    }, 1000);
  }

}
