import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './core/state/app.reducer';
import { buttonClicked, startLoading } from './core/state/app.actions';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './core/layout/loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoading$: Observable<boolean>;
  message$: Observable<string>;
  buttonClicked$: Observable<boolean>; 

  constructor(private store: Store<{ app: AppState }>) {
    this.isLoading$ = this.store.select(state => state.app.isLoading);
    this.message$ = this.store.select(state => state.app.message);
    this.buttonClicked$ = this.store.select((state) => state.app.buttonClicked);
  }

  onStart() {
    this.store.dispatch(startLoading());
    this.store.dispatch(buttonClicked());
  }
}
