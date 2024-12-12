import { createReducer, on } from '@ngrx/store';
import { searchCities, startLoading, stopLoading, updateFilteredCities } from './app.actions';

export interface City {
  id: number;
  name: string;
}

export interface AppState {
  isLoading: boolean;
  cities: City[];
  filteredCities: City[];
}

const initialState: AppState = {
  isLoading: false,
  cities: [
    { id: 1, name: 'Istanbul' },
    { id: 2, name: 'Ankara' },
    { id: 3, name: 'Izmir' },
    { id: 4, name: 'Bursa' }
  ],
  filteredCities: []
};

export const appReducer = createReducer(
  initialState,
  on(startLoading, state => ({
    ...state,
    isLoading: true
  })),
  on(stopLoading, state => ({
    ...state,
    isLoading: false
  })),
  on(searchCities, (state, { query }) => ({
    ...state,
    filteredCities: state.cities.filter(city =>
      city.name.toLowerCase().includes(query.toLowerCase())
    )
  })),
  on(updateFilteredCities, (state, { filteredCities }) => ({
    ...state,
    filteredCities
  }))
);
