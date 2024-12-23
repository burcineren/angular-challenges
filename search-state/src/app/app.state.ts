import { Action, ActionReducer, ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { AppEffects } from "./core/state/loader-state/loader.effects";
import { AppState, appReducer } from "./core/state/loader-state/loader.reducer";
import { CityState, appReducer as cityReducer } from "./core/state/city-state/city.reducer";
import { ThemeState, themeReducer } from "./core/state/theme-state/theme.reducer";
import { LanguageState, languageReducer } from "./core/state/language-state/language.reducer";

export interface AppStore {
    app: ActionReducer<AppState, Action>;
    city: ActionReducer<CityState, Action>;
    theme: ActionReducer<ThemeState, Action>;
    language: ActionReducer<LanguageState, Action>;
}

export const appStore: ActionReducerMap<{ app: AppState; city: CityState; theme: ThemeState; language: LanguageState }> = {
    app: appReducer,
    city: cityReducer,
    theme: themeReducer,
    language: languageReducer,

};

export const selectAppState = (state: { app: AppState }) => state.app;
export const selectCityState = (state: { city: CityState }) => state.city;


export const selectFilteredCities = createSelector(
    selectCityState,
    (state: CityState) => state.filteredCities
);

export const selectThemeState = createFeatureSelector<ThemeState>('theme');

export const selectIsDarkMode = createSelector(
  selectThemeState,
  (state: ThemeState) => state.isDarkMode
);

export const selectLanguageState = createFeatureSelector<LanguageState>('language');

export const selectLanguage = createSelector(
  selectLanguageState,
  (state: LanguageState) => state.lang
);
export const appEffects = [AppEffects];
