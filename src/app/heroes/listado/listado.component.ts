import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heores:string[] =['Spiderman','Iroman','Thor','Batman','Hulk']
  heroeBorrado:string[] = []

  borrarHeroe():void{

    this.heroeBorrado.push(this.heores.shift()||'') ;
  }

}
