import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.sass']
})
export class DisplayCardComponent implements OnInit {
  @Input() title;
  @Input() text;
  @Input() colour;
  constructor() { }

  ngOnInit() {
  }

}
