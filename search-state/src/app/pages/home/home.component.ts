import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from '../../core/layout/loading/loading.component';
import { NavbarComponent } from '../../core/layout/navbar/navbar.component';
import { Observable, take } from 'rxjs';
import { AppState } from '../../core/state/loader-state/loader.reducer';
import { Store } from '@ngrx/store';
import { CityState } from '../../core/state/city-state/city.reducer';
import { startLoading } from '../../core/state/loader-state/loader.actions';
import { resetCities, searchCities } from '../../core/state/city-state/city.actions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, FormsModule, LoadingComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  searchQuery: string = '';
  isLoading$: Observable<boolean>;
  message$: Observable<string>;
  clearButton:boolean = false;
  loadingMessage:any= '';

  filteredCities$: Observable<{ id: number; name: string }[]>;

  constructor(private store: Store<{ app: AppState; city: CityState }>) {
    this.isLoading$ = this.store.select(state => state.app.isLoading);
    this.message$ = this.store.select(state => state.app.message);
    this.filteredCities$ = this.store.select(state => state.city.filteredCities);
  
  }

  search() {
    this.isLoading$.pipe(take(1)).subscribe(isLoading => {
      if (isLoading) {
        alert('Arama işlemi devam ediyor. Lütfen bekleyin.');
      } else {
        if (this.searchQuery.trim()) {
          this.store.dispatch(startLoading());
          this.clearButton = true;
          this.store.dispatch(searchCities({ query: this.searchQuery }));
        } else {
          alert('Arama kutusu boş olamaz!');
        }
      }
    });
  }
  
  reset() {
    this.searchQuery = '';
    this.store.dispatch(resetCities());
  }
}
