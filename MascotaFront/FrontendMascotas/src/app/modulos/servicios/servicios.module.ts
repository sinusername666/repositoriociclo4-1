import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { AsignarServicioComponent } from './asignar-servicio/asignar-servicio.component';


@NgModule({
  declarations: [
    AsignarServicioComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
