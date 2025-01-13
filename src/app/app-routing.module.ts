import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './tienda/tienda.component';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { SudaderasComponent } from './sudaderas/sudaderas.component';
import { OtrosComponent } from './otros/otros.component';

const routes: Routes = [
  {path: "tienda", component: TiendaComponent, children:[
    {path: "camisetas",component: CamisetasComponent},
    {path: "sudaderas",component: SudaderasComponent},
    {path: "otros",component: OtrosComponent}
  ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
