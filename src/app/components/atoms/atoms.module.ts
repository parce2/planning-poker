import { NgModule } from "@angular/core";
import { AlertComponent } from './alert/alert.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from "./input/input.component";
import { CardComponent } from "./card/card.component";
import { InputCheckboxComponent } from "./input-checkbox/input-checkbox.component";
import { ModalComponent } from "./modal/modal.component";
import { FormErrorsComponent } from './errors/form-errors/form-errors.component';
@NgModule({
  declarations: [
    AlertComponent,
    ButtonComponent,
    CardComponent,
    InputComponent,
    InputCheckboxComponent,
    ModalComponent,
    FormErrorsComponent
  ],
  exports: [ AlertComponent,
    ButtonComponent,
    CardComponent,
    InputComponent,
    InputCheckboxComponent,
    ModalComponent]
})

export class AtomsModule {}
