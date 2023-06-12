import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private openModalSubject = new Subject<boolean>();
  public openModal$ = this.openModalSubject.asObservable();

  constructor() { }

  openModal() {
    this.openModalSubject.next(true);
  }

  closeModal() {
    this.openModalSubject.next(false);
  }
}
