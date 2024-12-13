import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, tap, } from 'rxjs/operators';
import { startLoading, stopLoading, searchCities } from './app.actions';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';

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

}