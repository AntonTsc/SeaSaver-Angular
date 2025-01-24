import { Component, OnInit } from '@angular/core';
import { TripuServService } from '../services/tripu-serv.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit{
  capitanes: any[] = [];
  medicos: any[] = [];
  tripulantes: any[] = []

  constructor(private servicio: TripuServService){}

  /**
   * Recogida de datos de la API, se hacen dos peticiones GET
   * y al final juntamos los objetos obtenidos con el operador ...
   * esto es simplemente para que si no tuvieramos ningun
   * tripulante pues que no se renderice esa parte.
   */
  ngOnInit(): void {
    this.servicio.getCapitanes().subscribe(cap =>{
      this.capitanes = cap;

      this.servicio.getMedicos().subscribe(med =>{
        this.medicos = med;
        this.tripulantes = [...this.capitanes, ...this.medicos];    
      });
      
    });
    
  }
}
