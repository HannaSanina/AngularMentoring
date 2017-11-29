import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CourseService } from './course/course.service';
import { HttpClient } from '@angular/common/http/src/client';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe }from './search-bar/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SearchBarComponent,
    HeaderComponent,
    FooterComponent,
    LoginPageComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
