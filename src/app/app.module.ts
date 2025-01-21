import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TiendaComponent } from './tienda/tienda.component';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { SudaderasComponent } from './sudaderas/sudaderas.component';
import { OtrosComponent } from './otros/otros.component';
import { BuscarRescatadosComponent } from './buscar-rescatados/buscar-rescatados.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { DonarComponent } from './donar/donar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    NavbarComponent,
    TiendaComponent,
    CamisetasComponent,
    SudaderasComponent,
    OtrosComponent,
    BuscarRescatadosComponent,
    NosotrosComponent,
    LoginComponent,
    DonarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
