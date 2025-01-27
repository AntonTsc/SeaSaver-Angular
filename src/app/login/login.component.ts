import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServService } from '../services/auth-serv.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mensaje: string = "";

  constructor(private router: Router, private auth: AuthServService) { }

  ngOnInit(): void {
    this.auth.isLogged$.subscribe(logged => {
      if(logged){
        this.router.navigate(['']);
      }
    });
  }

  iniciarSesion(e: Event, us: HTMLInputElement, pass: HTMLInputElement){
    e.preventDefault();
    
    if(us.value.trim() == "" || pass.value.trim() == ""){
      this.mensaje = "Rellena los campos";
    }else if(us.value.length > 12){
      this.mensaje = "El nombre es demasiado largo";
    }else if(us.value == "admin" && pass.value == "admin"){
      this.auth.login(true, us.value);
      this.router.navigate(['']);

          const Toast = Swal.mixin({
            toast: true,
            position: "bottom-start",
            showConfirmButton: false,
            timer: 8000,
            timerProgressBar: true,
            showClass:{
              popup: 'swal2-show',
              backdrop: 'swal2-backdrop-show'
            },
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "info",
            html: `
            <h3 style="color: #003366">Sesión iniciada como administrador</h3>
            <p style="color: black">Recuerda que puedes acceder a la gestión de los rescatados desde el menu desplegable</p>
            `
          });
    }else{
      this.auth.login(false, us.value);
      this.router.navigate(['']);

          const Toast = Swal.mixin({
            toast: true,
            position: "bottom-start",
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "info",
            title: `Bienvenido ${us.value}!`,
            color: "#000"
          });
    }
  }
}