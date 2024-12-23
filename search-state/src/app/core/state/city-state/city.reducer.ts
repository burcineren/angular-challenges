import { createReducer, on } from '@ngrx/store';
import { resetCities, searchCities, updateFilteredCities } from './city.actions';

export interface City {
  id: number;
  name: string;
}

export interface CityState {
  cities: City[];
  filteredCities: City[];
}

const initialState: CityState = {
  cities: [
    { id: 1, name: 'İstanbul' },
    { id: 2, name: 'Ankara' },
    { id: 3, name: 'Izmir' },
    { id: 4, name: 'Bursa' },
    { id: 5, name: 'Antalya' },
    { id: 6, name: 'Adana' }
  ],
  filteredCities: [
    { id: 1, name: 'İstanbul' },
    { id: 2, name: 'Ankara' },
    { id: 3, name: 'Izmir' },
    { id: 4, name: 'Bursa' },
    { id: 5, name: 'Antalya' },
    { id: 6, name: 'Adana' }
  ]
};

export const appReducer = createReducer(
  initialState,
  on(searchCities, (state, { query }) => {
    const filtered = state.cities.filter(city =>
      city.name.toLocaleLowerCase('tr').includes(query.toLocaleLowerCase('tr'))
    );
    return {
      ...state,
      filteredCities: filtered
    };
  }),
  on(resetCities, state => ({
    ...state,
    filteredCities: state.cities
  })),
  on(updateFilteredCities, (state, { filteredCities }) => ({
    ...state,
    filteredCities: filteredCities.length > 0 ? filteredCities : state.cities
  }))
);