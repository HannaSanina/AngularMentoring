import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DebugElement, Injectable } from '@angular/core';
import { CourseEditPageComponent } from './course-edit-page.component';
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

describe('CourseEditPage component', () => {
    let fixture: ComponentFixture<CourseEditPageComponent>;
    let de: DebugElement;
    let el: any;
    let component: any;
    let courseService: CourseService;
    let courseSpy: any;
    let activatedRoute: ActivatedRouteStub;
    let authorService: AuthorService;
    let authorSpy: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule,
                FormsModule],
            declarations: [CourseEditPageComponent, AuthorsListComponent, DurationPipe],
            providers: [
                { provide: ActivatedRoute, useClass: ActivatedRouteStub },
                { provide: Router, useClass: RouterStub },
                { provide: CourseService, useClass: CourseService },
                { provide: Location, useClass: LocationStub },
                { provide: AuthorService, useClass: AuthorServiceStub },
                ExtendedHttp, HttpHandler
            ]}).compileComponents().then(() => {
            activatedRoute = new ActivatedRouteStub();
            activatedRoute.testParamMap = { id: courseStub[0].id };
            fixture = TestBed.createComponent(CourseEditPageComponent);
            component = fixture.componentInstance;
            courseService = fixture.debugElement.injector.get(CourseService);
            courseSpy = spyOn(courseService, 'getCourse').and.returnValue(Observable.of(courseStub));
            authorService = fixture.debugElement.injector.get(AuthorService);
            authorSpy = spyOn(authorService, 'getAuthors').and.returnValue(Observable.of(authors));
        });
    }));

    it('should be defined', () => {
        expect(component).toBeDefined();
    });

    it('should call data for course', async(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(courseSpy.calls.any()).toBe(true, 'getCourse() called');
        });
    }));

    it('should recieve course data', async(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(component.model).toEqual(courseStub[0]);
        });
    }));

    it('should display title in input', async(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            de = fixture.debugElement.query(By.css('.form-control.title'));
            el = de.nativeElement;
            expect(el.value).toEqual(courseStub[0].title);
        });
    }));

    it('should display description in textarea', async(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            de = fixture.debugElement.query(By.css('.form-control.description'));
            el = de.nativeElement;
            expect(el.value).toEqual(courseStub[0].description);
        });
    }));

    it('should display duration in textarea', async(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            de = fixture.debugElement.query(By.css('.form-control.duration'));
            el = de.nativeElement;
            expect(+el.value).toEqual(courseStub[0].duration);
        });
    }));
});

describe('Duration pipe', () => {
    let duration: DurationPipe;
    beforeEach(() => {
        duration = new DurationPipe();
    });
    it('should transform according to the format #h #min', () => {
        let transformResult = duration.transform(courseStub[0].duration);
        expect(transformResult).toEqual('3h 38min');
    });
    it('should transform according to the format #min', () => {
        let transformResult = duration.transform(38);
        expect(transformResult).toEqual('38min');
    });
});

const courseStub = [{
    "id": 6521,
    "title": "irure qui commodo laborum",
    "description": "In ad eiusmod quis fugiat. Sunt eu magna consequat velit ea aliquip aute minim. Sit Lorem pariatur veniam aute.",
    "isTopRated": false,
    "createdDate": "2017-07-10T18:03:28+00:00",
    "authors": [
        {
            "id": 8488,
            "firstName": "Sasha",
            "lastName": "Solis"
        },
        {
            "id": 5756,
            "firstName": "Madeline",
            "lastName": "Whitehead"
        }
    ],
    "duration": 218
}];

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

class CourseServiceStub {
    getCourse(id: number) {
        return courseStub;
    }
}

class RouterStub {
    navigate(url: string) { return url; }
}

class LocationStub {
    back() { }
}

@Injectable()
export class ActivatedRouteStub {
    private subject = new BehaviorSubject(convertToParamMap(this.testParamMap));
    paramMap = this.subject.asObservable();

    private _testParamMap: ParamMap;
    get testParamMap() { return this._testParamMap; }
    set testParamMap(params: {}) {
        this._testParamMap = convertToParamMap(params);
        this.subject.next(this._testParamMap);
    }

    get snapshot() {
        return { paramMap: this.testParamMap };
    }

}
