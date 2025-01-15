import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  abierto: boolean = false;

  abrirMenu(){
    this.abierto = true;
  }

  cerrarMenu(){
    this.abierto = false;
  }

}
