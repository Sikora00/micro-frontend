import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddToLightboxButtonComponent } from './add-to-lightbox-button/add-to-lightbox-button.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, AddToLightboxButtonComponent],
  imports: [BrowserModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
