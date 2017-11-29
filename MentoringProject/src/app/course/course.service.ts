import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Course } from './course';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CourseService {
  private url = 'api/courses';

  constructor(private http: HttpClient) {
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }

  searchCourse(term: string): Observable<Course[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Course[]>(`api/courses/?title=${term}`).pipe(
      tap(_ => this.log(`found matching "${term}"`)),
      catchError(this.handleError<Course[]>('search', []))
    );
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.url, course, httpOptions).pipe(
      tap((course: Course) => this.log(`added course w/ id=${course.id}`)),
      catchError(this.handleError<Course>('add'))
    );
  }

  updateCourse(course: Course): Observable<any> {
    return this.http.put(this.url, course, httpOptions).pipe(
      tap(_ => this.log(`updated id=${course.id}`)),
      catchError(this.handleError<any>('updateCourse'))
    );
  }

  deleteCourse(course: Course): Observable<Course> {
    const id = course.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Course>(url, httpOptions).pipe(
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
