import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadLivros } from './cad-livros/cad-livros';
import { Listar } from './listar/listar';

const routes: Routes = [

{path: 'Cadlivro', component: CadLivros},
{path: 'listar', component: Listar},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivrosRoutingModule {}
