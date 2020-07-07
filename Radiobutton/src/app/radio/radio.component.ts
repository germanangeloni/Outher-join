import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {
selectedDay: string='';
day : any = [

'Osvaldo Lunes 21/3',
'Oscar Martes 31/6',
'Carlos Jueves 8/4',
'Ramon Sabado 3/6'

];

radioChangeHandler (event: any)  {

this.selectedDay = event.target.value;

  }
}