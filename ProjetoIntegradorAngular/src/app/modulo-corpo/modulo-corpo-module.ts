import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloCorpoRoutingModule } from './modulo-corpo-routing-module';
import { Principal } from './principal/principal';
import { Cabecalho } from './cabecalho/cabecalho';

@NgModule({
  declarations: [Principal, Cabecalho],
  imports: [CommonModule, ModuloCorpoRoutingModule],
  exports: [Cabecalho]
})
export class ModuloCorpoModule {}
