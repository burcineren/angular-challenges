import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './core/state/app.reducer';
import { startLoading } from './core/state/app.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoading$: Observable<boolean>;
  message$: Observable<string>;

  constructor(private store: Store<{ app: AppState }>) {
    this.isLoading$ = this.store.select(state => state.app.isLoading);
    this.message$ = this.store.select(state => state.app.message);
  }

  onStart() {
    this.store.dispatch(startLoading());
  }
}
