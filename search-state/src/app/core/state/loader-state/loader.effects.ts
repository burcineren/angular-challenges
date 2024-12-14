
import { operationCompleted, startLoading, stopLoading } from './loader.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  simulateOperation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(startLoading),
      switchMap(() =>
        of(stopLoading(), operationCompleted()).pipe(delay(5000))
      )
    )
  );
}