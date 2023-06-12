import { Component, Input } from '@angular/core';

@Component({
  selector: 'a-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() type: string = 'text';
  @Input() name: string = 'option'
  @Input() value: any = '';

}
