import { Component, OnInit } from '@angular/core';
import { Rescatado } from '../modelos/rescatado.model';
import { RescatadosService } from '../services/rescatados.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RescatesService } from '../services/rescates.service';
import { TripuServService } from '../services/tripu-serv.service';
import Swal from 'sweetalert2';
import { AuthServService } from '../services/auth-serv.service';

@Component({
  selector: 'app-ver-rescatado',
  templateUrl: './ver-rescatado.component.html',
  styleUrls: ['./ver-rescatado.component.scss']
})
export class VerRescatadoComponent implements OnInit{

  //Clase inicializada para que no salgan errores en la consola
  rescatado: Rescatado = new Rescatado(null,0,0,"","",0,1,"","",null);
  rescate: any = {lugar: ""};
  medico: any = {nombre: "", apellido: ""};
  fichaAbierta: boolean = false;
  is_admin: boolean = false;

  constructor(private router: ActivatedRoute, private rescServicio: RescatadosService, 
    private route: Router, private rescateServicio: RescatesService, 
    private medicoServicio: TripuServService, private auth: AuthServService){}

    /**
     * cuando carga el componente, coge el id de la url y 
     * hace peticiones GET a la api para sacar el rescatado,
     * rescate del que viene y su medico.
     */
  ngOnInit(): void {
    this.router.paramMap.subscribe(params =>{
      const idRescatado = params.get('id');
      this.rescServicio.getRescatado(Number(idRescatado)).subscribe({
        next: data =>{
          this.rescatado = new Rescatado(
            data.id,
            data.medico_id,
            data.rescate_id,
            data.nombre,
            data.apellido,
            data.edad,
            data.sexo,
            data.nacionalidad,
            data.estado,
            data.foto || null
          );
          this.rescateServicio.getRescate(this.rescatado.rescate_id).subscribe(data =>{
            this.rescate = data;            
          });

          this.medicoServicio.getMedico(this.rescatado.medico_id).subscribe(data =>{
            this.medico = data;            
          })
        },
        error: error =>{
          console.log("Error al recoger datos del rescatado", error);          
        }
      });
    });

    this.auth.admin$.subscribe(admin => {
      this.is_admin = admin;
      if (!this.is_admin){
        this.route.navigate(["rescatados"]);
      }
    })
  }

  /**
   * Funcion para que al pulsar la flechita, haga una animacion
   * el panel y se cambie la ruta.
   * 
   * @param panel panel desplegable donde sale la info del Rescatado
   */
  volver(panel: Element, donde: number, id: number){
    panel.classList.add("dissappear");

    if(donde == 1){
      setTimeout(()=>{
        this.route.navigate(["rescatados"]);
      }, 300);
    }else{
      setTimeout(()=>{
        this.route.navigate(['../../editar', id], { relativeTo: this.router });
      }, 300);
    }

  }

  borrar(panel: Element){
    Swal.fire({
          title: `¿Quieres borrar a ${this.rescatado.nombre}?`,
          text: "Se eliminará al rescatado con esta acción",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí",
          cancelButtonText: "No"
        }).then((result) => {
          if (result.isConfirmed) {
            this.rescServicio.borrarRescatado(Number(this.rescatado.id));
            this.volver(panel, 1, 0);
            Swal.fire({
              title: "Borrado!",
              text: "Se ha borrado a " + this.rescatado.nombre,
              icon: "success",
              showConfirmButton: false,
              showCloseButton: true
            });
          }
        });
  }

  /**
   * Funcion para abrir el apartado editar desde
   * el componente ver.
   * 
   * @param panel panel para cerrar
   * @param id id del rescatado a editar
   */
  editar(panel: Element, id: any){
    this.volver(panel, 2, id);
  }
}
