import { createAction, props } from '@ngrx/store';

export const toggleDarkMode = createAction('[Theme] Toggle Dark Mode');
export const updateClassName = createAction(
    '[Theme] Update Class Name',
    props<{ className: string }>()
  );