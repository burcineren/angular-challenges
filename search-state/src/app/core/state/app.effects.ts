import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, map, mergeMap, tap, } from 'rxjs/operators';
import { startLoading, stopLoading, searchCities, resetCities } from './app.actions';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import { of } from 'rxjs';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private store: Store<{ app: AppState }>) { }
  searchCities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchCities),
      tap(() => this.store.dispatch(startLoading())),
      delay(5000),
      tap(() => this.store.dispatch(stopLoading()))
    ),
    { dispatch: false }
  );
  resetCities$ = createEffect(() =>
  this.actions$.pipe(
    ofType(resetCities),
    mergeMap(() =>
      of(stopLoading()).pipe(
        delay(5000),
        map(() => stopLoading())
      )
    )
  )
);
}