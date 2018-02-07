import { GET_ALL, GET_ALL_SUCCESS, dataRecieved, GetAllSuccessAction } from './courses.reducer';
import { CourseService } from '../course.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { Store, select } from '@ngrx/store';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class CourseEffects {
    @Effect()
    get$: Observable<Action> = this.actions$
        .ofType(GET_ALL)
        .switchMap(() =>
            this.courseService.getCourses()
                // .map(data => dataRecieved(data)));
               .switchMap(data => Observable.of(new GetAllSuccessAction(data))));

    constructor(
        private courseService: CourseService,
        private actions$: Actions,
        private store: Store<any[]>
    ) { }
}
