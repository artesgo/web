import { createReducer, on } from '@ngrx/store';
import { APP_ACTIONS } from './app.actions';
import { ITradeState } from '../firestore/trade/+state/trade.reducer';

export const initialState: IState = {
  user: null,
  subscription: false,
  trades: null
};

export const appReducer = createReducer(
  initialState,
  on(APP_ACTIONS.SIGNIN_SUCCESS, (state, { user }) => {
    return { ...state, user };
  }),
  on(APP_ACTIONS.SIGNUP_SUCCESS, (state, { user }) => ({
    ...state,
    user: user
  })),
  on(APP_ACTIONS.SIGNOUT, state => ({ ...state, user: null }))
);

export interface IState {
  user: firebase.User;
  subscription: boolean;
  trades: ITradeState;
}
