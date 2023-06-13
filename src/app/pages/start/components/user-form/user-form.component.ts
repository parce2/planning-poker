import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '@core/services/utilities/modal.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public initForm!: FormGroup;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.modalService.openModal();
  }

  public sendForm() {
    console.log(this.initForm.value)
  }

  private initializeForm() {
    this.initForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

}
