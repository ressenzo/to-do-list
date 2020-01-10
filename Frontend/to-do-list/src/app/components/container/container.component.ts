import { Component, OnInit } from '@angular/core';
import { Atividade } from 'src/app/classes/atividade';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  private atividade: Atividade;
  constructor() { }

  ngOnInit() {
  }

  obterAtividadeCadastrada(atividade: Atividade) {
    
    this.atividade = atividade;
  }

}
