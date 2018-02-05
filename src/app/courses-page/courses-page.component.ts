import { Component, OnInit } from '@angular/core';
import { Course } from './course-item/course';
import { CourseService } from '../services/course.service';
import { PagerService } from '../services/pager.service';
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
  allItems: Course[];
  pager: any = {};
  error: any;
  transform: any;
  sub: Subscription;

  constructor(private courseService: CourseService, private pagerService: PagerService) { }

  ngOnInit() {
    this.getCourses();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getCourses(): void {
    const millisecInDay = 1000 * 60 * 60 * 24;

    this.sub = this.courseService.getCourses()
      //   .map(v => v = v.filter(item => moment(item.createdDate).diff(moment(new Date())) > -144 * 1000 * 60 * 60 * 24))
      .subscribe(items => {
        this.allItems = items;
        this.setPage(1);
      }, error => {
        this.error = error.message; console.log(error);
      });
  }

  search(searchTerm: string, field: string): void {
    this.sub = this.courseService.searchCourse(searchTerm, field)
      //   .map(v => v = v.filter(item => moment(item.createdDate).diff(moment(new Date())) > -144 * 1000 * 60 * 60 * 24))
      .subscribe(items => {
        this.courseList = items;
      }, error => {
        this.error = error.message; console.log(error);
      });
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pager = this.pagerService.getPager(this.allItems.length, page);
    this.courseList = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
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

