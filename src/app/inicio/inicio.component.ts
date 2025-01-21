import { Component } from '@angular/core';
import rescates from 'src/assets/json/rescates.json'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent {
  rescates: any[] = rescates;
}
