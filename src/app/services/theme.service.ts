import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  darkTheme: boolean = true
  theme: BehaviorSubject<string> = new BehaviorSubject<string>(this.darkTheme ? "dark" : "light")

  getTheme() {
    return this.theme.asObservable()
  }

  toggleTheme() {
    this.darkTheme = !this.darkTheme
    this.theme.next(this.darkTheme ? "dark" : "light")

    const doc = document.documentElement
    const newTheme = doc.className === "dark" ? "light" : "dark"
    doc.className = newTheme
  }
}
