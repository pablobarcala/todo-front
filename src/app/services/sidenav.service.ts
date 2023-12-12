import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  sidenavOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  getSidenavOpen() {
    return this.sidenavOpen.asObservable()
  }

  toggleSidenav() {
    this.sidenavOpen.next(!this.sidenavOpen.value)
  }

  closeSidenav() {
    this.sidenavOpen.next(false)
  }
}
