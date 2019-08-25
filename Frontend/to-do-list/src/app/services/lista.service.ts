import { Injectable } from '@angular/core';
import { Atividade } from '../classes/atividade';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  public URL = "http://localhost:49472/Api";
  public ATIVIDADES_API = `${this.URL}/Atividade`;

  constructor(private http: HttpClient) { }

  obterAtividades() {

    return this.http.get<Atividade[]>(this.ATIVIDADES_API);
  }

  excluirAtividade(id: number) {
    
    return this.http.delete(`${this.ATIVIDADES_API}/${id}`);
  }

  cadastrarAtividade(atividade: Atividade): Observable<Atividade> {
    
    return this.http.post<Atividade>(`${this.ATIVIDADES_API}/cadastrar`, atividade);
  }
}
