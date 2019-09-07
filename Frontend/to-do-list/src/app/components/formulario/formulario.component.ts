import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Atividade } from 'src/app/classes/atividade';
import { AtividadeService } from 'src/app/services/atividade.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  @Output() atividadeCadastrada = new EventEmitter<Atividade>();
  public atividade: Atividade;

  constructor(public atividadeService: AtividadeService) { }

  ngOnInit() {

    this.atividade = new Atividade(0, null);
  }

  salvarAtividade(atividade: Atividade) {

    let atividadeCadastrada: Atividade;

    this.atividadeService.cadastrarAtividade(atividade).subscribe((ati: Atividade) => {
      
      this.atividade = new Atividade(0, null);
      atividadeCadastrada = {
        descricao: atividade.descricao,
        id: ati.id
      };
      this.atividadeCadastrada.emit(atividadeCadastrada);
    });
  }

}
