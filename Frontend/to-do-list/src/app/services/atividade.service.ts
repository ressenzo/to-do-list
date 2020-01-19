import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Atividade } from '../classes/atividade';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  public URL = "http://localhost:49472/Api/Atividades";

  constructor(private http: HttpClient) { }

  obterAtividades() {

    return this.http.get<Atividade[]>(this.URL);
  }

  cadastrarAtividade(atividade: Atividade): Observable<Atividade> {
    
    atividade.id = null;
    return this.http.post<Atividade>(this.URL, atividade);
  }

  alterarAtividade(atividade: Atividade): Observable<Atividade> {

    const descricaoAlterada: object = {
      descricaoAtividade: atividade.descricao
    };
    return this.http.patch<Atividade>(`${this.URL}/${atividade.id}`, descricaoAlterada );
  }

  excluirAtividade(id: number) {
    
    return this.http.delete(`${this.URL}/${id}`);
  }
}
