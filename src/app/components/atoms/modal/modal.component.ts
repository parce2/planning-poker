import { Component } from '@angular/core';
import { ModalService } from '@core/services/utilities/modal.service';

@Component({
  selector: 'a-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  public isOpen = false;

  constructor(private modalService: ModalService) {
    this.modalService.openModal$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

}
