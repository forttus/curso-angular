import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.modulo';
import { ContadorModulo } from './contador/contador.modulo';



@NgModule({
  //componentes q se esta utilizando
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModulo

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
