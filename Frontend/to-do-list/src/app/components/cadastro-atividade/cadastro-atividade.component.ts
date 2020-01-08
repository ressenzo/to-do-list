import { Component, OnInit } from '@angular/core';
import { Atividade } from 'src/app/classes/atividade';

@Component({
  selector: 'app-cadastro-atividade',
  templateUrl: './cadastro-atividade.component.html',
  styleUrls: ['./cadastro-atividade.component.scss']
})
export class CadastroAtividadeComponent implements OnInit {

  private atividade: Atividade;
  constructor() { }

  ngOnInit() {
  }

  obterAtividadeCadastrada(atividade: Atividade) {
    
    this.atividade = atividade;
  }

}
