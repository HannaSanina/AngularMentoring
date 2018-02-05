import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Course } from '../courses-page/course-item/course';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import * as moment from 'moment';
import { ExtendedHttp } from './extended-http.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CourseService {
  private url = 'api/courses';

  constructor(private http: ExtendedHttp) {
  }

  getCourses(): Observable<Course[]> {
    return this.http.get(this.url).map(response => response.json());
  }

  getCourse(id: string): Observable<Course> {
    return this.http.get(`api/courses/?id=${id}`).pipe(
      tap(_ => this.log(`found course with id "${id}"`)),
      catchError(this.handleError<Course>('getCourseById'))
    );
  }

  searchCourse(term: string, field: string): Observable<Course[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get(`api/courses/?${field}=${term}`)
    .map(response => response.json())
    .pipe(
      tap(_ => this.log(`found matching "${term}"`)),
      catchError(this.handleError<Course[]>('search', []))
    );
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post(this.url, course).pipe(
      tap((res: Course) => this.log(`added course w/ id=${res.id}`)),
      catchError(this.handleError<Course>('add'))
    );
  }

  updateCourse(course: Course): Observable<any> {
    return this.http.put(this.url, course).pipe(
      tap(_ => this.log(`updated id=${course.id}`)),
      catchError(this.handleError<any>('updateCourse'))
    );
  }

  deleteCourse(course: Course): Observable<any> {
    const id = course.id;
    const url = `${this.url}/${id}`;

    return this.http.delete(url).pipe(
      tap(_ => this.log(`deleted course id=${id}`)),
      catchError(this.handleError<Course>('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    //TODO: add Logger Service
    console.dir(message);
  }

}
