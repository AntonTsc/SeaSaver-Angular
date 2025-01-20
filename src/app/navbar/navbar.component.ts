import { Component, OnInit } from '@angular/core';
import { AuthServService } from '../services/auth-serv.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  isAdmin: boolean = false;
  is_logged: boolean = false;
  userName: String = "";

  constructor(private authService: AuthServService, private route: Router){ }

  ngOnInit(){

    this.authService.admin$.subscribe(admin => {
      this.isAdmin = admin;
    });

    this.authService.isLogged$.subscribe(logged => {
      this.is_logged = logged;
    });

    this.authService.userName$.subscribe(name => {
      this.userName = name;
    });

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

  logout(): void {
    this.authService.logout(); // Cerrar sesión
    this.cerrarMenu();
    this.route.navigate([""]);

    const Toast = Swal.mixin({
      toast: true,
      position: "bottom",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "info",
      title: "Has cerrado sesión"
    });
  }

}
