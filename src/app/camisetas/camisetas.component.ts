import { Component, NgModule } from '@angular/core';
import productos from 'src/assets/json/tienda.json';
@Component({
  selector: 'app-camisetas',
  templateUrl: './camisetas.component.html',
  styleUrls: ['./camisetas.component.scss']
})
export class CamisetasComponent {
  tienda:any=productos;
}