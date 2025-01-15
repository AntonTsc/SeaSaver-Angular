import { Component } from '@angular/core';
import productos from 'src/assets/json/tienda.json';
@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html',
  styleUrls: ['./otros.component.scss']
})
export class OtrosComponent {
  tienda:any=productos;
}
