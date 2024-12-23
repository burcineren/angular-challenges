import { createReducer, on } from '@ngrx/store';
import { changeLanguage } from './language.actions';

export interface LanguageState {
    lang: string;
}

export const initialLanguageState: LanguageState = {
    lang: 'en',
};

export const languageReducer = createReducer(
    initialLanguageState,
    on(changeLanguage, (state, { lang }) => {
        localStorage.setItem('lang', lang);

        return {
            ...state,
            lang,
        };
    })
);