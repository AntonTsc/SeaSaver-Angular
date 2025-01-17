import { Component } from '@angular/core';
import nosotros from 'src/assets/json/nosotros.json'

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent {
  nosotros:any=nosotros
}
