import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  theme: string = ''

  constructor(
    private themeService: ThemeService
  ){}

  ngOnInit(): void {
    this.themeService.getTheme().subscribe(theme => this.theme = theme)

    const doc = document.documentElement
    doc.className = this.theme
  }
}
