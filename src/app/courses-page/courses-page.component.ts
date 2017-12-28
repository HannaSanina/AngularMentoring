import { Component, OnInit } from '@angular/core';
import { Course } from './course-item/course';
import { CourseService } from '../services/course.service';
import { Observable } from 'rxjs/Observable';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import * as moment from 'moment';
import { Subscription } from 'rxjs/Subscription';
import { catchError, tap, map } from 'rxjs/operators';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/from';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})

export class CoursesPageComponent implements OnInit, OnDestroy {
  courseList: Course[];
  error: any;
  transform: any;
  sub: Subscription;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getCourses(): void {
    const millisecInDay = 1000 * 60 * 60 * 24;

    this.sub = this.courseService.getCourses()
      .map(v => v = v.filter(item => moment(item.createdDate).diff(moment(new Date())) > -14 * 1000 * 60 * 60 * 24))
      .subscribe(items => {
        console.dir(items);
        this.courseList = items;
      }, error => {
        this.error = error.message; console.log(error);
      });
  }

  add(newCourse: Course): void {
    if (!newCourse) { return; }
    this.courseService.addCourse(newCourse as Course)
      .subscribe(item => {
        this.courseList.push(item);
      });
  }

  onEdit(course: Course): void {
    if (!course) { return; }
    this.courseService.updateCourse(course as Course)
      .subscribe(item => {
        this.courseList.push(item);
      });
  }

  onDelete(course: Course): void {
    this.courseList = this.courseList.filter(item => item !== course);
    this.courseService.deleteCourse(course).subscribe();
  }

}

