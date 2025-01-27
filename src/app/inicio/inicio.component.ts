import { Component, OnInit } from '@angular/core';
import { RescatesService } from '../services/rescates.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit{
  rescates: any[] = [];

  constructor(private servicioResc: RescatesService){}

  ngOnInit(): void {
    this.servicioResc.getRescates().subscribe(resc=>{
      this.rescates = [resc[0], resc[1], resc[2]];      
    });
  }
}
