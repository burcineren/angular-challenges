import { Action, ActionReducer, ActionReducerMap, createSelector } from "@ngrx/store";
import { AppEffects } from "./core/state/app.effects";
import { AppState, appReducer } from "./core/state/app.reducer";

export interface AppStore {
    app: ActionReducer<AppState, Action>;
}
export const appStore: ActionReducerMap<{ app: AppState }> = {
    app: appReducer
};
export const selectAppState = (state: { app: AppState }) => state.app;

export const selectFilteredCities = createSelector(
    selectAppState,
    (state: AppState) => state.filteredCities
);

export const appEffects = [AppEffects];