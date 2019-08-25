import { Component, OnInit } from '@angular/core';
import { Atividade } from 'src/app/classes/atividade';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public atividades: Atividade[] = [];

  constructor(private listaService: ListaService) { }

  ngOnInit() {
    
    this.listarTodos();
  }

  listarTodos() {
    this.listaService.obterAtividades().subscribe((data: Atividade[]) => { this.atividades = data });
  }

  adicionarAtividade(atividade: Atividade) {

    this.atividades.push(atividade);
  }

  excluir(id: number) {
    
    
    this.listaService.excluirAtividade(id).subscribe(() => this.listarTodos());
  }

}
