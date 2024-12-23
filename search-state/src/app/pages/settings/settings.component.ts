import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormsModule } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { selectIsDarkMode, selectLanguage } from '../../app.state';
import { toggleDarkMode } from '../../core/state/theme-state/theme.action';
import { changeLanguage } from '../../core/state/language-state/language.actions';
@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    NzButtonModule,
    NzSwitchModule,
    NzDropDownModule,
    NzIconModule,
    NzCardModule,
    FormsModule,
    TranslocoModule,
    CommonModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  transLogo: boolean = false;
  language: string = '';
  language$: Observable<string>;
  isDarkMode$: Observable<boolean>;

  constructor(private message: NzMessageService,
    public translocoService: TranslocoService,
    private store: Store
  ) {
    this.isDarkMode$ = this.store.select(selectIsDarkMode);
    this.language$ = this.store.select(selectLanguage);

    this.language$.subscribe((lang) => {
      this.translocoService.setActiveLang(lang);
    });
  }
  toggleDarkMode(): void {
    this.store.dispatch(toggleDarkMode());
  }
  changeLanguage(lang: string): void {
    this.store.dispatch(changeLanguage({ lang }));
    this.message.success(
      this.translocoService.translate('language') + ': ' + lang.toUpperCase()
    );
  }
}