import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdatesListComponent } from './updates-list/updates-list.component';
import { SingleUpdateComponent } from './single-update/single-update.component';
import { DisplayCardComponent } from './display-card/display-card.component';
import { DescriptionBoxComponent } from './description-box/description-box.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdatesListComponent,
    SingleUpdateComponent,
    DisplayCardComponent,
    DescriptionBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
