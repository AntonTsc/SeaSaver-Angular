import { Component, OnInit } from '@angular/core';
import { AuthServService } from '../services/auth-serv.service';
import { Router } from '@angular/router';
import { RescatesService } from '../services/rescates.service';
import { TripuServService } from '../services/tripu-serv.service';
import paises from "./../../assets/json/paises.json";
import Swal from 'sweetalert2';
import { Rescatado } from '../modelos/rescatado.model';

@Component({
  selector: 'app-crear-rescatado',
  templateUrl: './crear-rescatado.component.html',
  styleUrls: ['./crear-rescatado.component.scss']
})
export class CrearRescatadoComponent implements OnInit{

  is_admin: boolean = false;
  rescates: any[] = [];
  medicos: any[] = [];
  paisesArray = paises;
  foto!: any;
  nombre: string = "";
  apellido: string = "";
  edad: string = "";
  sexo: string = "";
  medico: string = "";
  rescate: string = "";
  nacionalidad: string = "";
  estado: string = "";

  constructor(private auth: AuthServService, private route: Router, 
    private rescatesService: RescatesService, private medicosService: TripuServService){}

  ngOnInit(): void {
    this.auth.admin$.subscribe(admin =>{
      this.is_admin = admin;

      if(!this.is_admin){
        this.route.navigate(["rescatados"]);
      }
    });

    this.rescatesService.getRescates().subscribe({
      next: data =>{
        this.rescates = data;
        
      },
      error: error =>{
        console.log("Error al recoger datos de los rescates", error);        
      }
    });

    this.medicosService.getMedicos().subscribe({
      next: data =>{
        this.medicos = data
      },
      error: error =>{
        console.log("Error al recoger datos de los médicos", error);
      }
    });

  }



  elegirFoto(e: any){
    // Convertir a Base64
    const reader = new FileReader();
    const file = e.files[0];
    reader.onload = () => {
      this.foto = reader.result;
    };
    reader.readAsDataURL(file); // Leer archivo como Data URL
  }

  crearRescatado(e: Event){
    e.preventDefault();

    const rescatadoNuevo = new Rescatado(
      null,
      Number(this.medico),
      Number(this.rescate),
      this.nombre,
      this.apellido,
      Number(this.edad),
      Number(this.sexo),
      this.nacionalidad,
      this.estado,
      this.foto
    );
    
  }

  cerrar(){
    this.route.navigate(["rescatados"]);
  }
}
