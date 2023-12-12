import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderTabComponent } from './header-tab/header-tab.component';
import { ExploreContainerComponent } from './explore-container/explore-container.component';



@NgModule({
  //Declaramos todos los componentes que están dentro de este módulo
  declarations: [HeaderTabComponent, ExploreContainerComponent],
  imports: [
    IonicModule
  ],
  //Declaramos los componentes que queremos exportar para que otros módulos los puedan utilizar
  exports:[
    HeaderTabComponent,
    ExploreContainerComponent
  ]
})
export class ComponentesModule { }
