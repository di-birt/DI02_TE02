import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { AyudaPageRoutingModule } from './ayuda-routing.module';
import { AyudaPage } from './ayuda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    AyudaPageRoutingModule
  ],
  declarations: [AyudaPage]
})
export class AyudaPageModule {}
