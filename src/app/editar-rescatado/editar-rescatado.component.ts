import { Component } from '@angular/core';
import { Rescatado } from '../modelos/rescatado.model';
import { AuthServService } from '../services/auth-serv.service';
import { RescatesService } from '../services/rescates.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TripuServService } from '../services/tripu-serv.service';
import paises from "./../../assets/json/paises.json";
import { RescatadosService } from '../services/rescatados.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-rescatado',
  templateUrl: './editar-rescatado.component.html',
  styleUrls: ['./editar-rescatado.component.scss']
})
export class EditarRescatadoComponent {
  is_admin: boolean = false;
  rescates: any[] = [];
  medicos: any[] = [];
  paisesArray = paises;
  rescatado: Rescatado = new Rescatado(null,0,0,"","",0,1,"","",null);
  foto!: any;

  constructor(private auth: AuthServService, private route: Router, 
    private rescatesService: RescatesService, private medicosService: TripuServService,
  private rescatados: RescatadosService, private active: ActivatedRoute){}

  ngOnInit(): void {
    this.auth.admin$.subscribe(admin =>{
      this.is_admin = admin;

      if(!this.is_admin){
        this.route.navigate(["rescatados"]);
      }
    });

    this.active.paramMap.subscribe(params =>{
      const id = params.get('id');
      this.rescatados.getRescatado(Number(id)).subscribe({
        next: data =>{
          this.rescatado = data;
          this.foto = this.rescatado.foto;          
        },
        error: error =>{
          console.log("Error al recoger los datos del rescatado");
        }
        
      });
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


  selectSexo(): boolean{
    let sexo = false;
    if(this.rescatado.sexo == 1){
      sexo = true;
    }
    return sexo;
  }

  selectMedico(id: any): boolean{
    let select = false;
    if(id == this.rescatado.medico_id){
      select = true;
    }
    return select;
  }

  selectRescate(id: any): boolean{
    let select = false;
    if(id == this.rescatado.rescate_id){
      select = true;
    }
    return select;
  }

  selectPais(nombre: any): boolean{
    let select = false;
    if(nombre == this.rescatado.nacionalidad){
      select = true;
    }
    return select;
  }
  
  cerrar(){
    this.route.navigate(["rescatados"]);
  }

  guardar(nombre: string){
    Swal.fire({
          title: `¿Deseas guardar los cambios?`,
          text: "Estás apunto de guardar los cambios de los datos de " + nombre,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí",
          cancelButtonText: "No"
        }).then((result) => {
          if (result.isConfirmed) {
            this.route.navigate(["rescatados"]);
            Swal.fire({
              title: "Datos guardados!",
              text: "Se han guardado los datos de " + nombre,
              icon: "success"
            });
          }
        });
  }
}
