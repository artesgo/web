import { createSelector } from '@ngrx/store';
import { IState } from './app.reducer';

export const appFeature = (state: IState) => state;
export const userSelector = createSelector(
  appFeature,
  (state: IState) => {
    return state.user;
  }
);
