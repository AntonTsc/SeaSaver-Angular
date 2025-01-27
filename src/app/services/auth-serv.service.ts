import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServService {
  // BehaviorSubjects para manejar el estado reactivo
  private adminSubject = new BehaviorSubject<boolean>(this.getAdminStatus());
  private isLoggedSubject = new BehaviorSubject<boolean>(this.getLoginStatus());
  private userNameSubject = new BehaviorSubject<string>(this.getUserName());

  // Observables para que los componentes puedan suscribirse
  admin$ = this.adminSubject.asObservable();
  isLogged$ = this.isLoggedSubject.asObservable();
  userName$ = this.userNameSubject.asObservable();

  constructor() {}

  // Métodos para obtener el estado actual de sessionStorage
  private getAdminStatus(): boolean {
    return sessionStorage.getItem('admin') === 'true';
  }

  private getLoginStatus(): boolean {
    return sessionStorage.getItem('is_logged') === 'true';
  }

  private getUserName(): any {
    return sessionStorage.getItem('userName');
  }

  // Método para iniciar sesión
  login(isAdmin: boolean, name: string): void {
    sessionStorage.setItem('admin', String(isAdmin));
    sessionStorage.setItem('is_logged', 'true');
    sessionStorage.setItem('userName', name);

    // Emitir los nuevos valores
    this.adminSubject.next(isAdmin);
    this.isLoggedSubject.next(true);
    this.userNameSubject.next(name);
  }

  // Método para cerrar sesión
  logout(): void {
    sessionStorage.removeItem('admin');
    sessionStorage.removeItem('is_logged');
    sessionStorage.removeItem('userName');

    // Emitir los nuevos valores
    this.adminSubject.next(false);
    this.isLoggedSubject.next(false);
  }
}
