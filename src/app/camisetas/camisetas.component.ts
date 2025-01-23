import { Component, NgModule } from '@angular/core';
import productos from 'src/assets/json/tienda.json';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-camisetas',
  templateUrl: './camisetas.component.html',
  styleUrls: ['./camisetas.component.scss']
})
export class CamisetasComponent {
  camisetas:any=productos.camisetas;

  comprar(n: string, p: number){
      Swal.fire({
        title: n,
        text: "¿Quieres seguir con la compra?",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#037df6",
        cancelButtonColor: "#FF4D4D",
        confirmButtonText: "Comprar",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Compra realizada!",
            text: `Has comprado ${n} por ${p}€`,
            icon: "success",
            showConfirmButton: false,
            showCloseButton: true
          });
        }
      });
    }
}