import { NgModule } from "@angular/core";
import { AlertComponent } from './alert/alert.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from "./input/input.component";
import { CardComponent } from "./card/card.component";
import { InputCheckboxComponent } from "./input-checkbox/input-checkbox.component";
import { ModalComponent } from "./modal/modal.component";
import { FormErrorsComponent } from './errors/form-errors/form-errors.component';
import { UserCircleComponent } from './user-circle/user-circle.component';
import { CommonModule } from "@angular/common";
@NgModule({
  declarations: [
    AlertComponent,
    ButtonComponent,
    CardComponent,
    InputComponent,
    InputCheckboxComponent,
    ModalComponent,
    FormErrorsComponent,
    UserCircleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    ButtonComponent,
    CardComponent,
    InputComponent,
    InputCheckboxComponent,
    ModalComponent,
    UserCircleComponent,
    UserCircleComponent
  ]
})

export class AtomsModule {}
