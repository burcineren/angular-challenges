import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState, City } from './core/state/app.reducer';
import { Store } from '@ngrx/store';
import { buttonClicked, loadCities, searchCities, startLoading } from './core/state/app.actions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { selectFilteredCities } from './app.state';
import { LoadingComponent } from './core/layout/loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  searchQuery: string = '';
  isLoading$: Observable<boolean>;
  filteredCities$: Observable<{ id: number; name: string }[]>;

  constructor(private store: Store<{ app: AppState }>) {
    this.isLoading$ = this.store.select(state => state.app.isLoading);
    this.filteredCities$ = this.store.select(state => state.app.filteredCities);
  }

  search() {
    this.store.dispatch(searchCities({ query: this.searchQuery }));
  }
}
