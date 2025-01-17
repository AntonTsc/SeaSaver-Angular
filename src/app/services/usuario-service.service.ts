import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  //boolean para saber si es admin o no.
  admin: boolean = false;
  //boolean para saber si ha iniciado sesion.
  is_logged: boolean = false;
  //String donde se guarda el nombre del usuario.
  nombre!:string;
  constructor() { }
}
