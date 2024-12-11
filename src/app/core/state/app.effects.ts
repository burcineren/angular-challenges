import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';
import { startLoading, stopLoading, operationCompleted } from './app.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  simulateOperation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(startLoading),
      switchMap(() =>
        of(stopLoading(), operationCompleted()).pipe(delay(5000)) // 5 saniye bekle
      )
    )
  );
}