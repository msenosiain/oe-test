import { Component, OnInit, ViewChild, AfterViewInit, Input, OnDestroy } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';
import { ILiveClass, COURSE_TYPE, ICourseItem, COURSE_STATUS } from './course.model';
import { IProgress } from '../progress/progress';
import { Subscription } from 'rxjs';
import { CoursesService } from './course.service';

@Component({
  selector: 'oe-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {


  @Input()
  progress: IProgress;

  liveClasess: ILiveClass[];
  lessons: ICourseItem[];
  practices: ICourseItem[];
  expired = false;

  private liveClassesSubscription: Subscription;

  @ViewChild(TimerComponent)
  private timer: TimerComponent;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    // raw arrays should come from a service call subscription
    this.liveClassesSubscription = this.coursesService.getLiveClasses().subscribe((rawLiveClasses) => {
      this.liveClasess = this.transformLiveClases(rawLiveClasses);
    });

    const rawItems = [{
      title: 'What is Your Address?',
      description: 'In this lesson, you learn how to use numbers 11-100. You learn how to talk about your address.',
      type: 'Lesson',
      img: '',
      status: 'IN_PROGRESS'
    },
    {
      title: 'The Hotel',
      description: 'In this lesson, you learn how to ask and answer questions.',
      type: 'Lesson',
      img: '',
      status: 'NOT_STARTED'
    },
    {
      title: 'What is Your Phone Number?',
      description: 'In this lesson, you learn how to use numbers 0-10. You learn how to say your phone number.',
      type: 'Lesson',
      img: '',
      status: 'NOT_STARTED'
    },
    {
      title: 'What is Your Email?',
      description: 'In this lesson, you learn how to spell your name and talk about your email address.',
      type: 'Lesson',
      img: '',
      status: 'NOT_STARTED'
    },
    {
      title: 'Weekend Edition',
      description: 'Today\u0027s Headlines - Level 1',
      type: 'Practice',
      img: '',
      status: 'NOT_STARTED'
    },
    {
      title: 'Word on the Street: Over the Hill',
      description: 'Word on the Street: Level 1',
      type: 'Practice',
      img: '',
      status: 'IN_PROGRESS'
    },
    {
      title: 'Disney: Journey Into Imagination',
      description: 'A fascinating experience can open your mind to a whole new world.\n',
      type: 'Practice',
      img: '',
      status: 'NOT_STARTED'
    },
    {
      title: 'Acing Your Job Interview',
      description: 'Christopher Glanzer shares some tips on how to be successful at job interviews.',
      type: 'Practice',
      img: '',
      status: 'NOT_STARTED'
    }
    ];

    // this.liveClasess = this.getLiveClases(rawLiveClasses);
    this.lessons = this.getLessons(rawItems);
    this.practices = this.getPractices(rawItems);
  }

  ngOnDestroy(): void {
    this.liveClassesSubscription.unsubscribe();
  }

  timeUp($event) {
    this.expired = $event;
  }

  restart($event) {
    $event.stopPropagation();
    this.expired = false;
    setTimeout(() => {
      this.timer.startCountDown(60);
    }, 0);
  }

  private transformLiveClases(rawLiveClasses: any[]): ILiveClass[] {
    return rawLiveClasses.map((rlc) => {
      const { title, description, img, document } = rlc;

      return { title, description, img, document, type: COURSE_TYPE.LIVE_CLASS, typeDescription: rlc.type };
    });
  }

  private getLessons(rawItems: any[]): ICourseItem[] {
    return rawItems.reduce((lessons, item) => {
      if (item.type === 'Lesson') {
        const { title, description, img, status } = item;
        lessons.push({
          title, description,
          img: (img ? img : 'https://via.placeholder.com/300x380.jpg?text=No%20Image'),
          status: (status === COURSE_STATUS.IN_PROGRESS ? 'En Progreso' : 'No comenzado'),
          type: COURSE_TYPE.LESSON, typeDescription: item.type
        });
      }

      return lessons;
    }, []);
  }

  private getPractices(rawItems: any[]): ICourseItem[] {
    return rawItems.reduce((lessons, item) => {
      if (item.type === 'Practice') {
        const { title, description, img, status } = item;
        lessons.push({
          title, description,
          img: (img ? img : 'https://via.placeholder.com/300x380.jpg?text=No%20Image'),
          status: (status === COURSE_STATUS.IN_PROGRESS ? 'En Progreso' : 'No comenzado'),
          type: COURSE_TYPE.PRACTICE, typeDescription: item.type
        });
      }

      return lessons;
    }, []);
  }

}
