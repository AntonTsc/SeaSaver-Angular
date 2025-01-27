import pais from "./../../assets/json/paises.json";

export class Rescatado {
    constructor(
      public id: number | null,
      public medico_id: number,
      public rescate_id: number,
      public nombre: string,
      public apellido: string,
      public edad: number,
      public sexo: number, // 1 para hombre, 2 para mujer
      public nacionalidad: string,
      public estado: string,
      public foto?: string | null // Opcional
    ) {}
  
    // Método para obtener nombre completo
    getNombreCompleto(): string {
      return `${this.nombre} ${this.apellido}`;
    }
  
    getBandera(): string{
        let bandera = null;
        for(let i = 0; i < pais.length; i++){
            if (this.nacionalidad == pais[i].nombre){
                bandera = pais[i].bandera;
            }
        }
        return bandera;
    }

    getFoto(){
        return this.foto ? this.foto : null;
    }

    getSexo(): string{
      if(this.sexo == 1){
        return "Hombre";
      }else{
        return "Mujer";
      }
    }

    /**
     * Funcion para sacar el icono del sexo
     * dependiendo de si es hombre o mujer
     * 
     * @returns icono dependiendo del sexo
     */
    getSignoSexo(): string{
      if(this.sexo == 1){
        return 'ri-men-line';
      }else{
        return 'ri-women-line';
      }
    }
  }
  