import { createAction } from '@ngrx/store';

export const startLoading = createAction('[App] Start Loading');
export const stopLoading = createAction('[App] Stop Loading');
export const operationCompleted = createAction('[App] Operation Completed');
