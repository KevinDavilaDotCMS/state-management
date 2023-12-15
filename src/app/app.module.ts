import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmisorComponent } from './components/emisor/emisor.component';
import { SubscriberComponent } from './components/subscriber/subscriber.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { EditContentState } from './state-ngxs/actions.state';
@NgModule({
  declarations: [AppComponent, EmisorComponent, SubscriberComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot([EditContentState]),
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
