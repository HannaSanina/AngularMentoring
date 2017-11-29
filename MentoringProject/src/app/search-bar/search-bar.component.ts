import { Component, OnInit } from '@angular/core';
import { Course } from '../course/course';
import { CourseService } from '../course/course.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { FilterPipe }from './filter.pipe';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  courses$: Observable<Course[]>;
  private searchTerms = new Subject<string>();

  constructor(private courseService: CourseService) { }

  search(term: string): void {
    console.dir(term)
    this.searchTerms.next(term);
  }

  add(course: Course): void{
    this.courseService.addCourse(course);
  }

  ngOnInit(): void {
    this.courses$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.courseService.searchCourse(term)),
    );
  }

}
