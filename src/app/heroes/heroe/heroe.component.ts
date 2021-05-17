import { Component } from "@angular/core";


@Component({
  selector:'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
  nombre:string ='Iroman'
  edad:number = 28

  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }

  obtnerNombre():string{
    return `${this.nombre} - ${this.edad}`
  }

  cambiarNombre():void{
    this.nombre='Spiderman'
  }

  cambiarEdad():void{
    console.log('hello');

    this.edad=45
  }

}
