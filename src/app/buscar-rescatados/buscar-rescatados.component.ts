import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buscar-rescatados',
  templateUrl: './buscar-rescatados.component.html',
  styleUrls: ['./buscar-rescatados.component.scss']
})
export class BuscarRescatadosComponent {
  nombre:string="";
  sexo:string="";
   edad:number=0;
}
