import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing-module';
import { CadLivros } from './cad-livros/cad-livros';
import { Listar } from './listar/listar';

@NgModule({
  declarations: [CadLivros, Listar],
  imports: [CommonModule, LivrosRoutingModule],
})
export class LivrosModule {}
