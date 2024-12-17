import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzCardModule } from 'ng-zorro-antd/card'; 
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    NzButtonModule,
    NzSwitchModule,
    NzDropDownModule, 
    NzIconModule,
    NzCardModule,
    FormsModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  isDarkMode: boolean = false; // Dark mode durumu
  transLogo: boolean = false; // Translogo durumu
  language: string = 'en'; // Dil seçeneği


  constructor(private message: NzMessageService) {}

  ngOnInit() {
    // localStorage'dan temayı kontrol et
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.updateTheme();
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode; // Durumu tersine çevir
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.updateTheme();
    this.message.success(
      this.isDarkMode ? 'Dark mode activated!' : 'Dark mode deactivated!'
    );
  }

  updateTheme() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}