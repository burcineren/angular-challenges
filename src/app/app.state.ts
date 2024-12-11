import { Action, ActionReducer, ActionReducerMap } from "@ngrx/store";
import { AppEffects } from "./core/state/app.effects";
import { AppState, appReducer } from "./core/state/app.reducer";

export interface AppStore {
    app: ActionReducer<AppState, Action>;
}
export const appStore: ActionReducerMap<{ app: AppState }> = {
    app: appReducer
};
export const appEffects = [AppEffects];