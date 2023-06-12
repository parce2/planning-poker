import { Component, OnInit } from '@angular/core';
import { ModalService } from '@core/services/utilities/modal.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.openModal();
  }

}
