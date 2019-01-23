import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description-box',
  templateUrl: './description-box.component.html',
  styleUrls: ['./description-box.component.sass']
})
export class DescriptionBoxComponent {
  @Input() text;
  @Input() date;
  
  constructor() { }

}
