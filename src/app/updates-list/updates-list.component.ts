import { Component, OnInit } from '@angular/core';
import { UpdatesService } from '../updates.service';
import { TIMELINE_STAGES, ACTIVITIES } from '../constants';
import * as moment from 'moment';
import * as _ from "lodash";

@Component({
  selector: 'app-updates-list',
  templateUrl: './updates-list.component.html',
  styleUrls: ['./updates-list.component.sass']
})
export class UpdatesListComponent implements OnInit {
  public updates = [];
  constructor(private updatesService: UpdatesService) { }

  ngOnInit() {
    this.updatesService.getUpdates().subscribe(res => {
      this.formatUpdates(res['activities']);
    });
  }

  formatUpdates(updates) {

    updates.sort(function compare(a, b) { // SORT IN ASCENDING ORDER TO CALCULATE STAGES
      let dateA = moment(a.activity_date, 'YYYY-MM-DD');
      let dateB = moment(b.activity_date, 'YYYY-MM-DD');
      return dateA - dateB;
    });

    let currentOrder = 0; // CURRENT STAGE ORDER
    updates.forEach(update => {
      update.dateToDisplay =  moment(update.activity_date, 'YYYY-MM-DD'); // DATE STRING TO DISPLAY VIA ANGULAR DATE PIPE
      update.cardDate = this.getCardDate(update.dateToDisplay);

      update.order = currentOrder;

      if (TIMELINE_STAGES[currentOrder].trigger) { // CHECK IF CURRENT ACTIVITY TRIGGERS A STAGE STANGE
        let trigger = _.filter(TIMELINE_STAGES[currentOrder].trigger, function (o) {
          return o.activity == update['activity_type'];
        });

        if (trigger && trigger.length) { // IF STAGE CHANGE OCCURED, INCREASE ORDER OF CURRENT STAGE
          currentOrder++;
        }
      }

      update.colour = this.getActivityColour(update);

    });
    this.updates = updates.reverse();
  }

  isNewStage(index) {
    // FIRST ELEMENT TO PRINT
    if (index == 0) {
      return null;
    }

    if (this.updates[index].order != this.updates[index - 1].order) {
      return TIMELINE_STAGES[this.updates[index - 1].order];
    }

  }

  getActivityColour(update) {
    switch (update.activity_type) {
      case ACTIVITIES.ACCEPT:
        return 'afternoon‐apricot';
      case ACTIVITIES.APPLICATION:
        return 'purple‐haze';
      case ACTIVITIES.SETTLED:
        return 'mountain-breeze';
      case ACTIVITIES.CLOSED:
        return 'mojo';
      default:
        switch (update.order) {
          case 1:
            return 'desert-flower';
          case 2:
            return 'purple‐haze';
          case 3:
            return 'aqua-ocean';
          case 4:
            return 'mountain-breeze';
          default:
            return 'mojo';
        }
    }
  }

  getCardDate(date){ // DATE TO DISPLAY ON CARD
    let currDate = moment();
    let numOfDays = currDate.diff(date, 'days');
    
    if(numOfDays===0){
      return 'Today';
    }
    
    if(numOfDays>=1 && numOfDays<=7){
      return numOfDays + ' day(s) ago';
    }
    return '';
  }

}
