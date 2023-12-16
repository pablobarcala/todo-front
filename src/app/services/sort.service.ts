import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  sortSelected: BehaviorSubject<string> = new BehaviorSubject<string>("")
  topDown: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)

  getSelected() {
    return this.sortSelected.asObservable()
  }

  getTopDown() {
    return this.topDown.asObservable()
  }

  changeSelected(selected: string){
    this.sortSelected.next(selected)
  }

  changeTopDown() {
    this.topDown.next(!this.topDown.value)
  }
}
