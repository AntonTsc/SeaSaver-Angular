import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TiendaComponent } from './tienda/tienda.component';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { SudaderasComponent } from './sudaderas/sudaderas.component';
import { OtrosComponent } from './otros/otros.component';
import { BuscarRescatadosComponent } from './buscar-rescatados/buscar-rescatados.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LoginComponent } from './login/login.component';
import { DonarComponent } from './donar/donar.component';
import { VerRescatadoComponent } from './ver-rescatado/ver-rescatado.component';
import { EditarRescatadoComponent } from './editar-rescatado/editar-rescatado.component';
import { CrearRescatadoComponent } from './crear-rescatado/crear-rescatado.component';




const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "tienda", component: TiendaComponent, children:[
    {path: "camisetas",component: CamisetasComponent},
    {path: "sudaderas",component: SudaderasComponent},
    {path: "otros",component: OtrosComponent}
  ]},
 {path: "rescatados", component: BuscarRescatadosComponent, children:[
  {path: "ver/:id", component: VerRescatadoComponent},
  {path: "crear", component: CrearRescatadoComponent},
  {path: "editar/:id", component: EditarRescatadoComponent}
 ]},
 {path: "nosotros", component: NosotrosComponent},
 {path: "signin", component: LoginComponent}, 
 {path: "donar", component: DonarComponent}, 
 {path: "**", pathMatch: "full", redirectTo: ""} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
