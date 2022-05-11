import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComAngCliComponent } from './meu-primeiro-com-ang-cli/meu-primeiro-com-ang-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComAngCliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
