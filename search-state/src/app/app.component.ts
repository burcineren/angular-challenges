import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, take } from 'rxjs';
import { AppState } from './core/state/loader-state/loader.reducer';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './core/layout/loading/loading.component';
import { resetCities, searchCities } from './core/state/city-state/city.actions';
import { CityState } from './core/state/city-state/city.reducer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  searchQuery: string = '';
  isLoading$: Observable<boolean>;
  filteredCities$: Observable<{ id: number; name: string }[]>;

  constructor(private store: Store<any>) {
    this.isLoading$ = this.store.select(state => state.app.isLoading);
    this.filteredCities$ = this.store.select(state => state.app.filteredCities);
  }

  search() {
    this.isLoading$.pipe(take(1)).subscribe(isLoading => {
      if (isLoading) {
        alert('Arama işlemi devam ediyor. Lütfen bekleyin.');
      } else {
        this.store.dispatch(searchCities({ query: this.searchQuery }));
      }
    });
  }
  reset() {
    this.searchQuery = '';
    this.store.dispatch(resetCities());
  }

}
