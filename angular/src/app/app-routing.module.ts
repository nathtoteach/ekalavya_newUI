import { componentFactoryName } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CourseComponent } from './course/course.component';
import { ExamComponent } from './exam/exam.component';
import { HomeComponent } from './home/home.component';
import { LiveclassComponent } from './liveclass/liveclass.component';
import { MyschoolComponent } from './myschool/myschool.component';


const routes: Routes = [
  {path:"Home", component: HomeComponent},
  {path:"Course",component: CourseComponent},
  {path:"Exam",component:ExamComponent},
  {path:"Analytics",component:AnalyticsComponent},
  {path:"Myschool",component: MyschoolComponent},
  {path:"Liveclass",component:LiveclassComponent}
  // {path:"**",component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
