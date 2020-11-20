import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { ExamComponent } from './exam/exam.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MyschoolComponent } from './myschool/myschool.component';
import { LiveclassComponent } from './liveclass/liveclass.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    ExamComponent,
    AnalyticsComponent,
    MyschoolComponent,
    LiveclassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
