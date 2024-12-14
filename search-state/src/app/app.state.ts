import { Action, ActionReducer, ActionReducerMap, createSelector } from "@ngrx/store";
import { AppEffects } from "./core/state/loader-state/loader.effects";
import { AppState, appReducer } from "./core/state/loader-state/loader.reducer";
import { CityState } from "./core/state/city-state/city.reducer";

export interface AppStore {
    app: ActionReducer<AppState, Action>;
}
export const appStore: ActionReducerMap<{ app: AppState }> = {
    app: appReducer
};
export const selectAppState = (state: { app: CityState }) => state.app;

export const selectFilteredCities = createSelector(
    selectAppState,
    (state: CityState) => state.filteredCities
);

export const appEffects = [AppEffects];