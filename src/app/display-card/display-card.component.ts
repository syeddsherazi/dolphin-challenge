import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.sass']
})
export class DisplayCardComponent {
  @Input() title;
  @Input() text;
  @Input() colour;

  constructor() { }

}
