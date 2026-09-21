import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio11',
  standalone: false,
  templateUrl: './exercicio11.html',
  styleUrl: './exercicio11.scss',
})
export class Exercicio11 {
   produto: string = 'Mouse Gamer';
  preco: number = 120;
  quantidade: number = 1;
  mensagem: string = '';

  aumentar() {
    this.quantidade++;
  }

  diminuir() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarCarrinho() {
    this.mensagem = `${this.quantidade} ${this.produto} adicionado ao carrinho!`;
  }
}
