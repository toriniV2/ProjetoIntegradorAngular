import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio6',
  standalone: false,
  templateUrl: './exercicio6.html',
  styleUrl: './exercicio6.scss',
})
export class Exercicio6 {
  nomesIniciais: string[] = ['Felipe', 'João', 'Maria', 'Ana', 'Carlos'];

  nomes: string[] = [...this.nomesIniciais];

  removerUltimo(): void {
    this.nomes.pop();
  }

  limparLista(): void {
    this.nomes = [];
  }

  restaurarLista(): void {
    this.nomes = [...this.nomesIniciais];
  }
}
