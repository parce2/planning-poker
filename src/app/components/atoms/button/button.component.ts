import { Component, Input } from '@angular/core';
@Component({
  selector: 'a-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() customClass: string = 'a-button a-button--primary';
}
