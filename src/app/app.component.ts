import { Component } from '@angular/core';
import { UpdatesService } from './updates.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public updates = [];

  constructor(private updatesService: UpdatesService) { }

  ngOnInit() {
    // GET UPDATES
    // FOR A PRODUCTION SCENARIO, WHILE INTEGRATING THIS COMPONENT, UPDATES SHOULD BE PASSED AS INPUT
    this.updatesService.getUpdates().subscribe(res => {
      // this.formatUpdates(res['activities']);
      this.updates = res['activities'];
    });
  }
}
