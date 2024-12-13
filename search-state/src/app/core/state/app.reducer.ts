import { createReducer, on } from '@ngrx/store';
import { resetCities, searchCities, startLoading, stopLoading, updateFilteredCities } from './app.actions';

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
    { id: 1, name: 'İstanbul' },
    { id: 2, name: 'Ankara' },
    { id: 3, name: 'Izmir' },
    { id: 4, name: 'Bursa' }
  ],
  filteredCities: [
    { id: 1, name: 'İstanbul' },
    { id: 2, name: 'Ankara' },
    { id: 3, name: 'Izmir' },
    { id: 4, name: 'Bursa' }
  ]
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
  on(searchCities, (state, { query }) => {
    const filtered = state.cities.filter(city =>
      city.name.toLocaleLowerCase('tr').includes(query.toLocaleLowerCase('tr'))
    );
    return {
      ...state,
      filteredCities: filtered.length > 0 ? filtered : []
    };
  }),
  on(resetCities, state => ({
    ...state,
    isLoading: true,
    filteredCities: state.cities
  })),
  on(updateFilteredCities, (state, { filteredCities }) => ({
    ...state,
    filteredCities
  })),

);
