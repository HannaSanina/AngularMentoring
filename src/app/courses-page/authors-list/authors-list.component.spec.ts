import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DebugElement, Injectable } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { DebugContext } from '@angular/core/src/view';
import { ActivatedRoute, Router } from '@angular/router';
import { ExtendedHttp } from '../../services/extended-http.service';
import { Location } from '@angular/common';
import { Course } from '../course-item/course';
import { } from 'jasmine';
import { AppModule } from '../../app.module';
import { CoursesPageComponent } from '../courses-page.component';
import { NgModule } from '@angular/core/src/metadata/ng_module';
import { AppComponent } from '../../app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DurationPipe } from '../duration.pipe';
import { AuthorsListComponent } from '../authors-list/authors-list.component';
import { AuthorService } from '../../services/author.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { convertToParamMap, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHandler, HttpHeaders, HttpResponse } from '@angular/common/http';

describe('Authors list component', () => {
    let fixture: ComponentFixture<AuthorsListComponent>;
    let de: DebugElement;
    let component: any;
    let authorService: AuthorService;
    let authorSpy: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule,
                FormsModule],
            declarations: [AuthorsListComponent],
            providers: [
                { provide: AuthorService, useClass: AuthorServiceStub },
                ExtendedHttp, HttpHandler
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(AuthorsListComponent);
            component = fixture.componentInstance;
            authorService = fixture.debugElement.injector.get(AuthorService);
            authorSpy = spyOn(authorService, 'getAuthors').and.returnValue(Observable.of(authors));
            fixture.detectChanges();
        });
    }));

    it('should request avaliable authors', async(() => {
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(authorSpy.calls.any()).toBe(true, 'getAuthors() called');
        });
    }));

    it('should recieve authors data', async(() => {
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(component.authors).toEqual(authors);
        });
    }));

    xit('should add selected items', () => {
        de = fixture.debugElement.query(By.css('.author-input'));
        de.triggerEventHandler('change', authors[0]);
        fixture.detectChanges();
        expect(component.selectedItems).toEqual(authors[0]);
    });
});


const authors = [{
    "_id": "5a71995de9a39686e1e232b1",
    "index": 0,
    "itemName": "Zelma Kelley",
    "selected": true
},
{
    "_id": "5a71995de508646c8cadf19f",
    "index": 1,
    "itemName": "Darcy Copeland"
}];

class AuthorServiceStub {
    getAuthors() {
        return authors;
    }
}
