import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  ngOnInit(){
    const links = document.querySelectorAll("a");

    links.forEach(link =>{
      link.addEventListener("click", ()=>{
        this.cerrarMenu();
        document.scrollingElement!.scrollTop = 0;
      });
    })
  }

  /**
   * Este componente es el navbar pero las funciones
   * son del menu desplegable. Tenemos un booleano
   * para saber si el menu está abierto o no
   * y con eso controlamos que el menu salga
   * al pulsar el icono del menu y se cierre
   * al pulsar la X.
   */
  abierto: boolean = false;

  abrirMenu(){
    this.abierto = true;
  }

  cerrarMenu(){
    this.abierto = false;
  }

}
