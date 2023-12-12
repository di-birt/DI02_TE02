import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  adivina: number;
  numero?: number;
  acierto: boolean;
  mensaje: string;
  desactivado: boolean;
  intentos: number;

  constructor() {
    this.adivina = 0;
    //this.numero = 0;
    this.acierto = false;
    this.mensaje = "";
    this.desactivado = true;
    this.intentos = 0;
   }

   resetearValores(){
    this.adivina = 0;
    this.numero= undefined;
    this.acierto = false;
    this.mensaje = "";
    this.desactivado = true;
    this.intentos = 0;
   }

  // Genera un número del 0 al 100
  nuevoNumero() {
    this.adivina = Math.floor(Math.random() * 101);
    console.log(this.adivina);
  }

  // Genera el primer número a adivinar
  ngOnInit() {
    //this.inicializarValores();
    this.nuevoNumero();
  }

  btnComprobarPulsado() {
    this.intentos++;
    if(Number(this.numero) == this.adivina){
      this.acierto = true;
      console.log("Has acertado");
      this.mensaje = "Has acertado!!"
    } else if(Number(this.numero) < this.adivina){
      this.acierto = false;
      console.log("El número secreto es mayor");
      this.mensaje="El número secreto es mayor";
    } else if(Number(this.numero) > this.adivina){
      this.acierto = false;
      console.log("El número secreto es menor");
      this.mensaje="El número secreto es menor";
    }
  }

  comprobarNumero(){
    if (Number(this.numero) > 100 || Number(this.numero) < 0) {
      console.log("Introduce un número entre 0 y 100");
      this.mensaje = "Introduce un número entre 0 y 100";
      this.desactivado = true;
    } else {
      console.log("Número OK");
      this.mensaje = "";
      this.desactivado = false;
    }
  }

  public newGameButton = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log("Juego Nuevo");
        this.resetearValores();
        this.nuevoNumero();
      },
    },
  ];

  setResult(ev: CustomEvent<any>) {
    const role = ev.detail.role; // Accede a la propiedad 'role' del evento
    console.log(`Dismissed with role: ${role}`);
  }

}
