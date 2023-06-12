import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'a-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() name: any;
  @Input() score: any;
  @Input() revelation: boolean = false;
  @Input() coffee: boolean = false;
  @Output() voteEvent = new EventEmitter()

  get status(): boolean {
    return (this.score > 0 || this.coffee || this.score == '?') && !this.revelation;
  }

  vote(): void {
    this.voteEvent.emit(this.score || this.coffee);
  }
}
