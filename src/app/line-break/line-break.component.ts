import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line-break',
  templateUrl: './line-break.component.html',
  styleUrls: ['./line-break.component.sass']
})
export class LineBreakComponent {
  @Input() title;
  @Input() text;

  constructor() { }

}
