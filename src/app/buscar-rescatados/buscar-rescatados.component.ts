import { Component, OnInit } from '@angular/core';
import { RescatadosService } from '../services/rescatados.service';
import { Rescatado } from '../modelos/rescatado.model';
import { AuthServService } from '../services/auth-serv.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscar-rescatados',
  templateUrl: './buscar-rescatados.component.html',
  styleUrls: ['./buscar-rescatados.component.scss']
})
export class BuscarRescatadosComponent implements OnInit{

  rescatados!: Rescatado[];
  rescatadosFiltrados!: Rescatado[];
  is_admin: boolean = false;
  menuFiltros: boolean = false;
  
  constructor(private RescServ: RescatadosService, private auth: AuthServService, private router: Router){}

  ngOnInit(): void {
    this.RescServ.rescatados$.subscribe(data =>{
      this.rescatados = data;
      this.rescatadosFiltrados = this.rescatados;
    });

    this.auth.admin$.subscribe(admin =>{
      this.is_admin = admin;
    });
  }

  mostrarMenuFiltros(){
    this.menuFiltros = true;
  }

  quitarMenuFiltros(){
    this.menuFiltros = false;
  }

  filtrarSexo(e: any){
    const sexo = e.value;

    if(sexo != 0){
      this.rescatadosFiltrados = this.rescatados.filter(rescatado => rescatado.sexo == sexo);
    }else{
      this.rescatadosFiltrados = this.rescatados;
    }
  }

  buscarNombre(input: HTMLInputElement){

    if(input.value.trim() == ""){
      this.rescatadosFiltrados = this.rescatados;
    }else{
      this.rescatadosFiltrados = this.rescatados.filter(rescatado => rescatado.nombre.toLowerCase().includes(input.value.toLowerCase()));
    }
    input.value = "";
  }

  ordenarEdad(e: any){
    const edad = e.value;

    if(edad == 0){
      this.rescatadosFiltrados = this.rescatados;
    }else if(edad == 1){
      this.rescatadosFiltrados = this.rescatados.sort((a, b) => b.edad - a.edad);
    }else{
      this.rescatadosFiltrados = this.rescatados.sort((a, b) => a.edad - b.edad);
    }
  }

  menuAjustes(idAjuste: number, abrir: boolean){
    const arrayAjustes = document.querySelectorAll(".ajustes");

    arrayAjustes.forEach(ajuste =>{
      if(Number(ajuste.id) == idAjuste && abrir){
        ajuste.classList.add("ajusteAbierto");
      }else if(Number(ajuste.id) == idAjuste && !abrir){
        ajuste.classList.remove("ajusteAbierto");
      }
    });
  }

  borrar(id: any, nombre: string){
    Swal.fire({
      title: `¿Quieres borrar a ${nombre}?`,
      text: "Se eliminará al rescatado con esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
      cancelButtonText: "No"
    }).then((result) => {
      if (result.isConfirmed) {
        this.RescServ.borrarRescatado(id);
        this.router.navigate(["rescatados"]);
        Swal.fire({
          title: "Borrado!",
          text: "Se ha borrado a " + nombre,
          icon: "success"
        });
      }
    });
  }

}
