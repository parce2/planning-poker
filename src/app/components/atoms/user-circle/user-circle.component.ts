import { Component, Input } from '@angular/core';

@Component({
  selector: 'a-user-circle',
  templateUrl: './user-circle.component.html',
  styleUrls: ['./user-circle.component.scss']
})
export class UserCircleComponent {

  @Input() name: string = '';
  @Input() initials: string = '';
  @Input() isSmall: boolean  = false;

}
