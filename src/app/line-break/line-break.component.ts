import { Component, OnInit, Input } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-line-break',
  templateUrl: './line-break.component.html',
  styleUrls: ['./line-break.component.sass']
})
export class LineBreakComponent implements OnInit {
  @Input() title;
  @Input() text;
  
  constructor() { }

  ngOnInit() {
  }

}
