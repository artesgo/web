import { createAction, props } from '@ngrx/store';

export const APP_ACTIONS = {
    SIGNIN: createAction('[Auth] Signin action', props<{ user: string; password: string }>()),
    SIGNIN_SUCCESS: createAction('[Auth] Signin Success', props<{ user: firebase.User }>()),
    SIGNIN_FAILURE: createAction('[Auth] Signin Failure'),
    SIGNUP: createAction('[Auth] Signup action', props<{ user: string; password: string }>()),
    SIGNUP_SUCCESS: createAction('[Auth] Signup Success', props<{ user: firebase.User }>()),
    SIGNUP_FAILURE: createAction('[Auth] Signup Failure'),
    SIGNOUT: createAction('[Auth] Signout action'),
    CHECKUSER: createAction('[Auth] Check Previous Session'),
}