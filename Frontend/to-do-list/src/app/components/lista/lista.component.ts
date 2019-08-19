import { Component, OnInit } from '@angular/core';
import { Atividade } from 'src/app/classes/atividade';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public atividades: Atividade[];

  constructor() { }

  ngOnInit() {
    
    this.atividades = [
      new Atividade(1, 'Atividade 1'),
      new Atividade(2, 'Atividade 2')
    ];
  }

  adicionarAtividade(atividade: Atividade) {

    this.atividades.push(atividade);
  }

}
