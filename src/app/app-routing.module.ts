import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './auth.guard';
import { CourseEditPageComponent } from './courses-page/course-edit-page/course-edit-page.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { NotFoundComponent } from './not-found.component';
import { CourseNewComponent } from './courses-page/course-edit-page/course-new.component';

const routes: Routes = [
  { path: 'courses/new', component: CourseNewComponent, canActivate: [AuthGuard] },
  { path: 'courses/:id', component: CourseEditPageComponent, canActivate: [AuthGuard] },
  { path: 'courses', component: CoursesPageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
