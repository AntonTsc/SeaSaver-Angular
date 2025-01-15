import { Component, Input } from '@angular/core';
import rescatado from 'src/assets/json/rescatados.json'

@Component({
  selector: 'app-buscar-rescatados',
  templateUrl: './buscar-rescatados.component.html',
  styleUrls: ['./buscar-rescatados.component.scss']
})
export class BuscarRescatadosComponent {
  rescatados:any[]=rescatado;
  rescatadosFiltrados = rescatado;

  filtrarNombre(nombre: string){
    this.rescatadosFiltrados = this.rescatados.filter(rescatado => rescatado.nombre.toLowerCase().includes(nombre.toLowerCase()));
  }
  filtrarsexo(sexo: any){
    if(sexo!="todos"){
      this.rescatadosFiltrados = this.rescatados.filter(rescatado => rescatado.sexo==(sexo));
    }
    else{
      this.rescatadosFiltrados = rescatado;
    }
  }
  filtraredad(edad: string){
    this.rescatadosFiltrados = this.rescatados.filter(rescatado => rescatado.edad.includes(edad));
  }
}
