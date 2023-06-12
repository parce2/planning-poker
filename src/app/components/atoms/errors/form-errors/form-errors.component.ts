import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { errorMessages } from '@components/atoms/consts/errors/input-form.errors';
@Component({
  selector: 'a-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss']
})
export class FormErrorsComponent {
  @Input() control!: AbstractControl;

  get errorsMessages(): string[] {
    const errors: Array<string> = [];

    if (this.control.errors)
      Object.assign(this.control.errors).forEach(
        (errorKey: string) => {
          const errorMessage = errorMessages[errorKey];
          if (errorMessage) errors.push(errorMessage)
        });

    return errors;
  }
}
