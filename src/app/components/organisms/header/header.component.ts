import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() title: string = 'Sprint 32';
  @Input() buttonText: string = 'Invitar jugadores';

}
