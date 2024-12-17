import { Action, ActionReducer, ActionReducerMap, createSelector } from "@ngrx/store";
import { AppEffects } from "./core/state/loader-state/loader.effects";
import { AppState, appReducer } from "./core/state/loader-state/loader.reducer";
import { CityState, appReducer as cityReducer } from "./core/state/city-state/city.reducer";

export interface AppStore {
    app: ActionReducer<AppState, Action>;
    city: ActionReducer<CityState, Action>;
}

export const appStore: ActionReducerMap<{ app: AppState; city: CityState }> = {
    app: appReducer,
    city: cityReducer
};

export const selectAppState = (state: { app: AppState }) => state.app;
export const selectCityState = (state: { city: CityState }) => state.city;

export const selectFilteredCities = createSelector(
    selectCityState,
    (state: CityState) => state.filteredCities
);

export const appEffects = [AppEffects];
