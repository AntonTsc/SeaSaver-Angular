import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TiendaComponent } from './tienda/tienda.component';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { SudaderasComponent } from './sudaderas/sudaderas.component';
import { OtrosComponent } from './otros/otros.component';
import { BuscarRescatadosComponent } from './buscar-rescatados/buscar-rescatados.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "tienda", component: TiendaComponent, children:[
    {path: "camisetas",component: CamisetasComponent},
    {path: "sudaderas",component: SudaderasComponent},
    {path: "otros",component: OtrosComponent}
  ]},
 {path: "buscar", component: BuscarRescatadosComponent},
 {path: "signin", component: LoginComponent} 
 {path: "**", pathMatch: "full", redirectTo: ""} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
