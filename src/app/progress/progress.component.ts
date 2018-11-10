import { Component, OnInit, Input } from '@angular/core';
import { IProgress } from './progress';

@Component({
  selector: 'oe-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  @Input()
  progress: IProgress;
  levelProgressPercent: string;

  ngOnInit() {
    this.levelProgressPercent = `${this.progress.levelProgressPercent - 1}%`;
  }

}
