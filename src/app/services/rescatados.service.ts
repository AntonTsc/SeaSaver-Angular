import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rescatado } from '../modelos/rescatado.model';

@Injectable({
  providedIn: 'root',
})
export class RescatadosService {
  private url: string = "http://192.168.2.10/api/rescatados";

  private rescatadosSubject = new BehaviorSubject<Rescatado[]>([]);
  rescatados$ = this.rescatadosSubject.asObservable();

  constructor(private http: HttpClient) {
    this.cargarRescatados(); // Inicializa el BehaviorSubject con datos de la API
  }

  // Método para cargar los rescatados desde la API
  private cargarRescatados(): void {
    this.http.get<any[]>(this.url).subscribe({
      next: (data) => {
        // Convertir los objetos genéricos a instancias de Rescatado
        const rescatados = data.map((item) =>
          new Rescatado(
            item.id,
            item.medico_id,
            item.rescate_id,
            item.nombre,
            item.apellido,
            item.edad,
            item.sexo,
            item.nacionalidad,
            item.estado,
            item.foto || null
          )
        );
        this.rescatadosSubject.next(rescatados); // Emitir las instancias de Rescatado
      },
      error: (error) => {
        console.error('Error al obtener los rescatados:', error);
        this.rescatadosSubject.next([]); // Emitir un array vacío en caso de error
      },
    });
  }

  getRescatado(id: number): Observable<Rescatado>{
    return this.http.get<Rescatado>(`${this.url}/${id}`);
  }

  borrarRescatado(id: number){
    this.http.delete(`${this.url}/${id}`).subscribe({
      next: ()=>{
        this.cargarRescatados();
      },
      error: (error) =>{
        console.log("Error al borrar rescatado", error);
      }
    });
  }
  
}
