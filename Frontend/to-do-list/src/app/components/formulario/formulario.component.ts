import { Component, OnInit } from '@angular/core';
import { Atividade } from 'src/app/classes/atividade';
import { AtividadeService } from 'src/app/services/atividade.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  public atividade: Atividade;

  constructor(public atividadeService: AtividadeService) { }

  ngOnInit() {

    this.atividade = new Atividade(0, null);
  }

  salvarAtividade(atividade: Atividade) {

    this.atividadeService.cadastrarAtividade(atividade).subscribe(() => this.atividade = new Atividade(0, null));
  }

}
