import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from './alert/alert.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from "./card/card.component";
import { FormErrorsComponent } from './errors/form-errors/form-errors.component';
import { InputComponent } from "./input/input.component";
import { ModalComponent } from "./modal/modal.component";
import { UserCircleComponent } from './user-circle/user-circle.component';
@NgModule({
  declarations: [
    AlertComponent,
    ButtonComponent,
    CardComponent,
    InputComponent,
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
    ModalComponent,
    UserCircleComponent,
    UserCircleComponent
  ]
})

export class AtomsModule {}
