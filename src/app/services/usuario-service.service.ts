import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  admin: boolean = false;
  is_logged: boolean = false;
  constructor() { }
}
