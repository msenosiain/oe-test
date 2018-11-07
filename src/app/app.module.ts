import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProgressComponent } from './progress/progress.component';

const ANGULAR_MATERIAL_MODULES = [
  MatCardModule,
  MatToolbarModule,
  MatProgressBarModule
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ...ANGULAR_MATERIAL_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
