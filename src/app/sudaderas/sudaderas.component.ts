import { Component } from '@angular/core';
import productos from 'src/assets/json/tienda.json';
@Component({
  selector: 'app-sudaderas',
  templateUrl: './sudaderas.component.html',
  styleUrls: ['./sudaderas.component.scss']
})
export class SudaderasComponent {
  tienda:any=productos;
}
