import { Component, OnInit } from '@angular/core';

interface IValor {
  imagen: string;
  url: string;
}

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})

export class Tab5Page implements OnInit {

  listaImagenes: IValor[] = [
    {
      imagen: "BIRT_LOGO.png",
      url: "birt.eus",
    },
    {
      imagen: "easo_logo.png",
      url: "easo.hezkuntza.net",
    },
    {
      imagen: "nicolas_larburu_logo.jpg",
      url: "nlarburu.hezkuntza.net",
    },
    {
      imagen: "ciudad_jardin_logo.png",
      url: "ciudadjardin.hezkuntza.net",
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }
}
