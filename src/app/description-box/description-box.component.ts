import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-description-box',
  templateUrl: './description-box.component.html',
  styleUrls: ['./description-box.component.sass']
})
export class DescriptionBoxComponent implements OnInit {
  @Input() text;
  @Input() date;
  
  constructor() { }

  ngOnInit() {
  }

}
