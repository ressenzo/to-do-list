import { Injectable } from '@angular/core';
import { Atividade } from '../classes/atividade';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private atividades: Atividade[] = [];

  constructor() { }

  obterAtividades() {
    
    this.atividades = [
      new Atividade(1, 'Atividade 1'),
      new Atividade(2, 'Atividade 2')
    ];

    return this.atividades;
  }
}
