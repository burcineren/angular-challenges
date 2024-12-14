import { createAction, props } from "@ngrx/store";
import { City } from "./city.reducer";

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