import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map, catchError, pluck } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { TradeService } from '../trade.service';
import { TRADE_ACTIONS } from './trade.actions';
import { TradeDocument } from '../../trade';

@Injectable()
export class TradeEffects {

  getter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TRADE_ACTIONS.TRADE_GET),
      pluck('user'),
      mergeMap((user: firebase.User) => {
        return this.ts.get(user)
          .pipe(
            map(data => TRADE_ACTIONS.TRADE_GET_SUCCESS({ trades: data })),
            catchError(error => EMPTY)
          )
      })
    )
  );

  deleter$ = createEffect(() => 
    this.actions$.pipe(
      ofType(TRADE_ACTIONS.TRADE_DEL),
      pluck('trade'),
      mergeMap((trade: TradeDocument) => {
        return this.ts.deleteTrade(trade).pipe(
          map(res => TRADE_ACTIONS.TRADE_DEL_SUCCESS({ trade })),
          catchError(error => EMPTY)
        )
      })
    )
  )

  updater$ = createEffect(() => 
    this.actions$.pipe(
      ofType(TRADE_ACTIONS.TRADE_UPD),
      pluck('trade'),
      mergeMap((trade: TradeDocument) => {
        return this.ts.updateTrade(trade).pipe(
          map(res => TRADE_ACTIONS.TRADE_UPD_SUCCESS({ trade })),
          catchError(error => EMPTY)
        )
      })
    )
  )

  adder$ = createEffect(() => 
    this.actions$.pipe(
      ofType(TRADE_ACTIONS.TRADE_ADD),
      pluck('trade'),
      mergeMap((trade: TradeDocument) => {
        return this.ts.addTrade(trade).pipe(
          map(res => TRADE_ACTIONS.TRADE_ADD_SUCCESS({ trade })),
          catchError(error => EMPTY)
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private ts: TradeService,
  ) {
  }
}
