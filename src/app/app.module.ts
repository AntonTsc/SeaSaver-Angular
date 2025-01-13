import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TiendaComponent } from './tienda/tienda.component';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { SudaderasComponent } from './sudaderas/sudaderas.component';
import { OtrosComponent } from './otros/otros.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TiendaComponent,
    CamisetasComponent,
    SudaderasComponent,
    OtrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, TiendaComponent, CamisetasComponent, SudaderasComponent, OtrosComponent]
})
export class AppModule { }
