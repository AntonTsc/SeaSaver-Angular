import { Component } from '@angular/core';
import rescatado from 'src/assets/json/rescatados.json'

@Component({
  selector: 'app-rescatados',
  templateUrl: './rescatados.component.html',
  styleUrls: ['./rescatados.component.scss']
})
export class RescatadosComponent {
  rescatados:any=rescatado;
}
