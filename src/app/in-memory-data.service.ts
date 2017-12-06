import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const courses = [
            {
                "title": "Introduction to AngularJS Material",
                "duration": 120,
                "date": "2017-01-01",
                "description": "Angular Material is an Angular-native, UI component framework from Google. It is a reference implementation of Google's Material Design and provides >30 UI components and services essential for mobile and desktop AngularJS applications.In this course, we will quickly build a real-work application Angular UI application, take a tour of Angular Material, and learn how ngMaterial can be used in your projects.",
                "id": "1"
            }, {
                "title": "Step-by-Step Async JavaScript with RxJS",
                "duration": 90,
                "date": "2017-01-01",
                "description": "RxJS is tremendously helpful in working with asynchronous code, but you’ve probably been stuck trying to use concepts you already know from Promises or Callbacks and applying them directly to RxJS. These lessons walk you through the step-by-step of building a simple game application with many asynchronous pieces. Each lesson focuses on a single operator or idea of how RxJS helps simplify your code as well as making you code flexible enough to easily add more asynchronous pieces as your codebase grows.",
                "id": "2"
            }, {
                "title": "Save time avoiding common mistakes using RxJS",
                "duration": 220,
                "date": "2017-01-01",
                "description": "In this course we will learn to identify common mistakes with RxJS that usually make code harder to read and even introduce bugs. Most of these mistakes are related to Subject, subscribe, and subscriptions. We are going to see how to use only Observables and convenient operators made for solving those mistakes, such as fromEvent, takeUntil and switchMap. By the end of this course, you will have a more immediate intuition on what patterns are simple and safe in RxJS.",
                "id": "3"
            },
            {
                "title": "Art",
                "duration": 220,
                "date": "2017-01-01",
                "description": "The whole history of modern art",
                "id": "4"
            }
        ];

        const users = [
            {
                "username": "User1",
                "password": "123"
            }, {
                "username": "User2",
                "password": "123"
            }, {
                "username": "User3",
                "password": "123"
            }
        ];
        return { courses, users };
    }
}