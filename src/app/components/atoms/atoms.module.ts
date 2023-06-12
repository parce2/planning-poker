import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonComponent } from './button/button.component';
import { CardComponent } from "./card/card.component";
import { FormErrorsComponent } from './errors/form-errors/form-errors.component';
import { InputComponent } from "./input/input.component";
import { ModalComponent } from "./modal/modal.component";
import { UserCircleComponent } from './user-circle/user-circle.component';
@NgModule({
  declarations: [
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
    ButtonComponent,
    CardComponent,
    InputComponent,
    ModalComponent,
    UserCircleComponent,
    UserCircleComponent
  ]
})

export class AtomsModule {}
