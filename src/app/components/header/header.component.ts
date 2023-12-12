import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(
    private themeService: ThemeService,
    private sidenavService: SidenavService
  ){}

  toggleSidenav() {
    this.sidenavService.toggleSidenav()
  }

  toggleTheme(){
    this.themeService.toggleTheme()
  }
}
