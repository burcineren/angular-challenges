import { createReducer, on } from '@ngrx/store';
import { operationCompleted, startLoading, stopLoading } from './app.actions';


export interface AppState {
  isLoading: boolean;
  message: string;
}
const initialState: AppState = {
  isLoading: false,
  message: '',
};
export const appReducer = createReducer(
  initialState,
  on(startLoading, (state) => ({
    ...state,
    isLoading: true,
    message: '',
  })),
  on(stopLoading, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(operationCompleted, (state) => ({
    ...state,
    message: 'İşlem Tamamlandı!',
  }))
);