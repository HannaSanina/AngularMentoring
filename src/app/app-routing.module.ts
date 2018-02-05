import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './auth.guard';
import { MainComponent } from './main/main.component';
import { CourseEditPageComponent } from './courses-page/course-edit-page/course-edit-page.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
    { path: 'edit', component: CourseEditPageComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);
