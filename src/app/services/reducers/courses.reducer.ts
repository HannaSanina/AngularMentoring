import { ActionReducer, Action } from '@ngrx/store';
import * as _ from 'underscore';
import { Course } from '../../courses-page/course-item/course';
import { CourseService } from '../course.service';

export const GET_ALL = 'GET_ALL';
export const GET_BY_ID = '[Course] get';
export const SEARCH = 'SEARCH';
export const ADD_ALL = 'ADD_ALL';
export const GET_ALL_SUCCESS = 'GET_ALL_SUCCESS';

export class GetCourseByNameAction implements Action {
    type = GET_BY_ID;

    constructor(public title: string) { }
}

export class GetAllSuccessAction implements Action {
    type = GET_ALL_SUCCESS;

    constructor(public payload: Array<Course>) { }
}

export const dataRecieved = payload => ({
    type: GET_ALL_SUCCESS, payload
});

export const coursesReducer: ActionReducer<any> = (courses: Array<Course> = [], action: any) => {
    switch (action.type) {
        case GET_ALL_SUCCESS:
            courses = action.payload;
            return courses;
        case GET_ALL:
            return courses;
        case GET_BY_ID:
            return _.filter(courses, item => item.title.toLowerCase().startsWith(action.title.toLowerCase()));
        default:
            return courses;
    }
};
