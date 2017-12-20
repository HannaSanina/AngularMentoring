import { Component, OnInit } from '@angular/core';
import { Course } from './course-item/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  courseList: Course[];
  error: any;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }

  ngOnChanges() {
    console.dir("OnChanges form Course component")
  }

  ngDoCheck() {
    console.dir("DoCheck event form Course component")
  }
  ngAfterContentInit() {
    console.dir("AfterContentInit event form Course component")
  }
  ngAfterContentChecked() {
    console.dir("AfterContentChecked event form Course component")
  }
  ngAfterViewInit() {
    console.dir("AfterViewInit event form Course component")
  }

  getCourses(): void {
   // this.courseList = [];
     this.courseService.getCourses()
      .subscribe(items => this.courseList = items, error => { this.error = error.message; console.log(error); });
  }

  add(newCourse: Course): void {
    if (!newCourse) { return; }
    this.courseService.addCourse(newCourse as Course)
      .subscribe(item => {
        this.courseList.push(item);
      });
  }

  edit(course: Course): void {
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

