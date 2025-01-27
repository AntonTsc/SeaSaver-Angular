import { Component, OnInit } from '@angular/core';
import { AuthServService } from '../services/auth-serv.service';

@Component({
  selector: 'app-donar',
  templateUrl: './donar.component.html',
  styleUrls: ['./donar.component.scss']
})
export class DonarComponent implements OnInit{

  paginaActual: string = 'Elegir cantidad';
  logeado!: boolean;
  pagoHecho: boolean = false;
  cantidad!: number;
  nombre!: string;
  mensajeError: boolean = false;

  constructor(private auth: AuthServService){}

  ngOnInit() {
    this.auth.isLogged$.subscribe(logged => this.logeado = logged);
    this.auth.userName$.subscribe(name => this.nombre = name);
  }

  /**
   * Funcion para quitar todos los caracteres que no
   * sean numeros.
   * 
   * @param cantidad Esto es el valor del input
   */
  soloNumeros(cantidad: any){
    const caracteres = cantidad.value.split("");
    cantidad.value = caracteres.filter((car: string) => car.match("[0-9]")).join("");   
  }

  /**
   * Funcion para que al hacer la donacion se mire
   * si la cantidad es valida y luego cambiar
   * la pantalla para mostrar que se ha completado el pago.
   * 
   * @param input Input para coger el valor y reiniciarlo luego
   */
  hacerDonacion(input: HTMLInputElement){

    if(input.value == "" || input.value == "0"){
      this.mensajeError = true;
      setTimeout(()=>{
        this.mensajeError = false;
      }, 3000);
    }else{
      this.cantidad = Number(input.value);
      input.value = "";
      this.pagoHecho = true;
      this.paginaActual = "Pago completado";
  
      setTimeout(()=>{
        this.pagoHecho = false;
        this.cantidad = 0;
        this.paginaActual = "Elegir cantidad";
      }, 5000);
    }

  }
}
