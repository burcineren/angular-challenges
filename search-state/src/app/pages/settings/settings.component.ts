import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzCardModule } from 'ng-zorro-antd/card'; 
import { FormsModule } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
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
    TranslocoModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  isDarkMode: boolean = false; // Dark mode durumu
  transLogo: boolean = false; // Translogo durumu
  language: string = 'en'; // Dil seçeneği


  constructor(private message: NzMessageService,
    public translocoService: TranslocoService) {}

  ngOnInit() {
    // localStorage'dan temayı kontrol et
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);

    const msgKey = this.isDarkMode ? 'darkModeActivated' : 'darkModeDeactivated';
    this.message.success(this.translocoService.translate(msgKey));
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);

    const msgKey = this.isDarkMode ? 'darkModeActivated' : 'darkModeDeactivated';
    this.message.success(this.translocoService.translate(msgKey));
  }

  updateTheme() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
  changeLanguage(lang: string): void {
    this.translocoService.setActiveLang(lang);
    localStorage.setItem('lang', lang);
    this.message.success(
      this.translocoService.translate('language') + ': ' + lang.toUpperCase()
    );
  }
}