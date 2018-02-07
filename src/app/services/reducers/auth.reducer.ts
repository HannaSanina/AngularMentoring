import { ActionReducer, Action } from '@ngrx/store';

export const LOGIN = 'login';
export const LOGOUT = 'logout';

export const authReducer: ActionReducer<boolean> = (isLoggedIn: boolean = false, action: Action) => {
    switch (action.type) {
        case LOGIN:
            isLoggedIn = true;
            return isLoggedIn;
        case LOGOUT:
            isLoggedIn = false;
            return isLoggedIn;
        default:
            return isLoggedIn;
    }
};
