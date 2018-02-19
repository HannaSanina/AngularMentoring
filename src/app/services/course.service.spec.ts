import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { CourseService } from '../services/course.service';
import { ExtendedHttp } from '../services/extended-http.service';
import { AppModule } from './../app.module';
import { NgModule } from '@angular/core/src/metadata/ng_module';
import { AppComponent } from './../app.component';
import { Observable } from 'rxjs/Observable';
import { HttpHandler } from '@angular/common/http';
import { Course } from '../courses-page/course-item/course';

describe('Course Service', () => {
    let courseService: CourseService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ExtendedHttp, HttpHandler
            ],
        });
        TestBed.compileComponents();
    });

    it(`should return courses list`,
        async(inject([ExtendedHttp], (http: ExtendedHttp) => {
            courseService = new CourseService(http);
            const spy = spyOn(courseService, 'getCourses').and.returnValue(Observable.of(courseStub));
            let result;
            courseService.getCourses().subscribe(res => result = res);
            expect(result).toEqual(courseStub);
        }))
    );

    it(`should find course by id`,
        async(inject([ExtendedHttp], (http: ExtendedHttp) => {
            courseService = new CourseService(http);
            let result;
            const spy = spyOn(courseService, 'getCourse').and.callThrough();
            courseService.getCourse(1).subscribe((res) => result = res);
            expect(result).toEqual(courseStub[1]);
        }))
    );

    it(`should search course by searchterm`,
        async(inject([ExtendedHttp], (http: ExtendedHttp) => {
            courseService = new CourseService(http);
            let result;
            const spy = spyOn(courseService, 'searchCourse').and.callThrough();
            courseService.searchCourse('Step-by-Step', 'title').subscribe((res) => result = res);
            expect(result).toEqual(courseStub[2]);
        }))
    );
});

const newCourse = new Course('testCourse', new Date(), 180, 'course for test');

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
},
{
    "title": "Introduction to AngularJS Material",
    "duration": 120,
    "createdDate": "2017-01-07",
    "description": "Angular Material is an Angular-native, UI component framework from Google. It is a reference implementation of Google's Material Design and provides >30 UI components and services essential for mobile and desktop AngularJS applications.In this course, we will quickly build a real-work application Angular UI application, take a tour of Angular Material, and learn how ngMaterial can be used in your projects.",
    "id": 1,
    "isTopRated": true,
    "authors": [
        {
            "_id": "5a71995dcffc656ecbd786cb",
            "index": 12,
            "itemName": "Goldie Hubbard"
        },
        {
            "_id": "5a71995d9601c79b5aca84d9",
            "index": 13,
            "itemName": "Ellen Simmons"
        },
        {
            "_id": "5a71995dffaf07467d2588ec",
            "index": 14,
            "itemName": "Romero Rivers"
        }
    ]
}, {
    "title": "Step-by-Step Async JavaScript with RxJS",
    "duration": 90,
    "createdDate": "2017-01-01",
    "description": "RxJS is tremendously helpful in working with asynchronous code, but you’ve probably been stuck trying to use concepts you already know from Promises or Callbacks and applying them directly to RxJS. These lessons walk you through the step-by-step of building a simple game application with many asynchronous pieces. Each lesson focuses on a single operator or idea of how RxJS helps simplify your code as well as making you code flexible enough to easily add more asynchronous pieces as your codebase grows.",
    "id": 2,
    "authors": [
        {
            "_id": "5a71995dcffc656ecbd786cb",
            "index": 12,
            "itemName": "Goldie Hubbard"
        },
        {
            "_id": "5a71995d9601c79b5aca84d9",
            "index": 13,
            "itemName": "Ellen Simmons"
        },
        {
            "_id": "5a71995dffaf07467d2588ec",
            "index": 14,
            "itemName": "Romero Rivers"
        }
    ]
}];
