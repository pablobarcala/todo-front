import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  sortSelected: BehaviorSubject<string> = new BehaviorSubject<string>("")

  getSelected() {
    return this.sortSelected.asObservable()
  }

  changeSelected(selected: string){
    this.sortSelected.next(selected)
  }
}
