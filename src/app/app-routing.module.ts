import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: '', component: AppComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
