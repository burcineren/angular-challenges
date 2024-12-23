import { createReducer, on } from '@ngrx/store';
import { toggleDarkMode, updateClassName } from './theme.action';

export interface ThemeState {
  isDarkMode: boolean;
  className: string;
}

export const initialThemeState: ThemeState = {
  isDarkMode: false, 
  className: '',     
};


export const themeReducer = createReducer(
  initialThemeState,
  on(toggleDarkMode, (state) => {
    const newIsDarkMode = !state.isDarkMode;

    document.body.classList.toggle('dark-mode', newIsDarkMode);

    return {
      ...state,
      isDarkMode: newIsDarkMode,
    };
  })
);