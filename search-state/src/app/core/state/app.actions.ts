import { createAction, props } from '@ngrx/store';
import { City } from './app.reducer';

export const startLoading = createAction('[App] Start Loading');
export const stopLoading = createAction('[App] Stop Loading');
export const operationCompleted = createAction('[App] Operation Completed');
export const buttonClicked = createAction('[App] Button Clicked'); 

  export const loadCities = createAction('[App] Load Cities');

export const searchCities = createAction(
  '[App] Search Cities',
  props<{ query: string }>() 
);

export const updateFilteredCities = createAction(
    '[App] Update Filtered Cities',
    props<{ filteredCities: City[] }>() 
  );
  export const resetCities = createAction('[App] Reset Cities');