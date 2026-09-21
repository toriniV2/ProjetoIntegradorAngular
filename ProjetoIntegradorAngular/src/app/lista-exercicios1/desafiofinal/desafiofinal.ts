import { Component } from '@angular/core';

@Component({
  selector: 'app-desafiofinal',
  standalone: false,
  templateUrl: './desafiofinal.html',
  styleUrl: './desafiofinal.scss',
})
export class Desafiofinal {
  nome: string = '';
  disciplinas: number = 1;
  mensagem: string = '';

  aumentar() {
    this.disciplinas++;
  }

  diminuir() {
    if (this.disciplinas > 1) {
      this.disciplinas--;
    }
  }

  realizarMatricula() {
    this.mensagem = `Matrícula realizada para ${this.nome} em ${this.disciplinas} disciplinas!`;
  }
}
