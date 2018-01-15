import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CourseService } from './services/course.service';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http/src/client';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { DialogComponent } from './dialog/dialog.component';
import { CourseItemComponent } from './courses-page/course-item/course-item.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user-service.service';
import { BorderHighlightDirective } from './courses-page/border-highlight.directive';
import { DurationPipe } from './courses-page/duration.pipe';
import { OrderByPipe } from './courses-page/order-by.pipe';
import { SearchFilterPipe } from './courses-page/search-filter.pipe';
import { CourseEditPageComponent } from './courses-page/course-edit-page/course-edit-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesPageComponent,
    HeaderComponent,
    FooterComponent,
    LoginPageComponent,
    DialogComponent,
    CourseItemComponent,
    BorderHighlightDirective,
    DurationPipe,
    OrderByPipe,
    SearchFilterPipe,
    CourseEditPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    routing
  ],
  providers: [CourseService, AuthGuard, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
