import { Component } from '@angular/core';
import productos from 'src/assets/json/tienda.json';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html',
  styleUrls: ['./otros.component.scss']
})
export class OtrosComponent {
  otros: any = productos.otros;

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
