import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Atividade } from '../classes/atividade';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  public URL = "http://localhost:49472/Api/Atividade";

  constructor(private http: HttpClient) { }

  cadastrarAtividade(atividade: Atividade): Observable<Atividade> {
    
    atividade.id = null;
    return this.http.post<Atividade>(this.URL, atividade);
  }
}
