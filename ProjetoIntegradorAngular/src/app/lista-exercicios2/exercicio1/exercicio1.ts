import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  standalone: false,
  templateUrl: './exercicio1.html',
  styleUrls: ['./exercicio1.scss']
})
export class Exercicio1 {

  mensagemVisivel: boolean = false;

  alternarMensagem(): void {
    this.mensagemVisivel = !this.mensagemVisivel;
  }

}