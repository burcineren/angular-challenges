import { createReducer, on } from '@ngrx/store';
import { buttonClicked, operationCompleted, startLoading, stopLoading } from './app.actions';


export interface AppState {
  isLoading: boolean;
  message: string;
  buttonClicked: boolean; 
}
const initialState: AppState = {
  isLoading: false,
  message: '',
  buttonClicked: false,
};
export const appReducer = createReducer(
  initialState,
  on(startLoading, (state) => ({
    ...state,
    isLoading: true,
    message: '',
    buttonClicked: true,
  })),
  on(stopLoading, (state) => ({
    ...state,
    isLoading: false,
    
  })),
  on(buttonClicked, (state) => ({
    ...state,
    buttonClicked: true, 
  })),
  on(operationCompleted, (state) => ({
    ...state,
    message: 'İşlem Tamamlandı!',
  }))
);