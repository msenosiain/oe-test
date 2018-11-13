import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProgressComponent } from './progress/progress.component';
import { CoursesComponent } from './courses/courses.component';
import { TimerComponent } from './timer/timer.component';

const ANGULAR_MATERIAL_MODULES = [
  MatToolbarModule,
  MatProgressBarModule,
  MatExpansionModule,
  MatIconModule,
  MatButtonModule,
  MatGridListModule
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProgressComponent,
    CoursesComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    ...ANGULAR_MATERIAL_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
