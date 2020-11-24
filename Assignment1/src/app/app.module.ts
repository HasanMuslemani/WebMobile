import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentTypePipe } from './content-type.pipe';
import { HoverStyleDirective } from './hover-style.directive';
import { MessagesComponent } from './messages/messages.component';
import { CreateContentComponent } from './create-content/create-content.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentTypePipe,
    HoverStyleDirective,
    MessagesComponent,
    CreateContentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false, delay: 1000}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
