import { Component, Input } from '@angular/core';
import { ACTIVITIES } from '../constants';

@Component({
  selector: 'app-single-update',
  templateUrl: './single-update.component.html',
  styleUrls: ['./single-update.component.sass']
})
export class SingleUpdateComponent {
  @Input() update;

  constructor() { }

  getTitle() {
    if (!this.update || !this.update.activity_type) {
      return '';
    }

    for (var property in ACTIVITIES) {
      if (ACTIVITIES.hasOwnProperty(property) && ACTIVITIES[property] === this.update.activity_type) {
        return property;
      }
    }
  }

}
