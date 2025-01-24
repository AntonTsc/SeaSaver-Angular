import { Component, OnInit } from '@angular/core';
import { TripuServService } from '../services/tripu-serv.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit{
  trabajadores: any[] = [];

  constructor(private servicio: TripuServService){}

  /**
   * Recogida de datos de la API, se hacen dos peticiones GET
   * y al final juntamos los objetos obtenidos con el operador ...
   */
  ngOnInit(): void {
    this.servicio.getCapitanes().subscribe(capitanes =>{

      this.servicio.getMedicos().subscribe(medicos =>{
        this.trabajadores = [...capitanes, ...medicos];
        console.log(this.trabajadores);        
      });
      
    });
    
  }
}
