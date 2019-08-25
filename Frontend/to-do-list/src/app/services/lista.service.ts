import { Injectable } from '@angular/core';
import { Atividade } from '../classes/atividade';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private atividades: Atividade[] = [];

  constructor(private http: HttpClient) { }

  obterAtividades() {
    
    // this.atividades = [
    //   new Atividade(1, 'Atividade 1'),
    //   new Atividade(2, 'Atividade 2')
    // ];

    // return this.atividades;

    return this.http.get<Atividade[]>("http://localhost:59584/Api/Atividades/get");
  }
}
