import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { VerRescatadoComponent } from './ver-rescatado/ver-rescatado.component';
import { EditarRescatadoComponent } from './editar-rescatado/editar-rescatado.component';
import { CrearRescatadoComponent } from './crear-rescatado/crear-rescatado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    TiendaComponent,
    CamisetasComponent,
    SudaderasComponent,
    OtrosComponent,
    BuscarRescatadosComponent,
    NosotrosComponent,
    LoginComponent,
    DonarComponent,
    VerRescatadoComponent,
    EditarRescatadoComponent,
    CrearRescatadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
