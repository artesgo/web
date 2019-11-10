import { createAction, props } from '@ngrx/store';
import { TradeDocument } from '../../trade';

export const LAYOUT_ACTIONS = {
  LAYOUT_GET: createAction('[Layout] Get', props<{ user: firebase.User }>()),
  LAYOUT_GET_SUCCESS: createAction(
    '[Layout] Get Success',
    props<{ layout: TradeDocument[] }>()
  ),
  LAYOUT_GET_FAILURE: createAction('[Layout] Get Failure')
};
