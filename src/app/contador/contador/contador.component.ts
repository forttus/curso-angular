import { Component } from '@angular/core';
@Component({
  selector: 'app-contador',
  template: `

  <h2 (click)="titulo">{{titulo}}</h2>

  <h4>La base es: <strong>{{base}}</strong></h4>

  <button (click)="acumular(base)">+ {{base}}</button>

  <span> {{numero}} </span>

  <button (click)="acumular(-base)">- {{base}}</button>

  `
})



export class ContadorComponent{
  //title = 'bases';
  titulo: string = 'Contador App';
  numero: number = 10;
  base  : number =5;

  acumular(valor:number){
    this.numero += valor;
  }
}
