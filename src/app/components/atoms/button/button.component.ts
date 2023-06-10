import { Component, Input } from '@angular/core';
import { AcceptedClass } from '@components/atoms/consts/type/button-class.type';
@Component({
  selector: 'a-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() customClass: AcceptedClass = 'a-button a-button--primary';
}
