import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Atividade } from '../../classes/atividade';
import { AtividadeService } from '../../services/atividade.service';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalConfirmacaoComponent } from '../modal-confirmacao/modal-confirmacao.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  @Output() atividadeCadastrada = new EventEmitter<Atividade>();
  private atividade: Atividade;

  constructor(
    public atividadeService: AtividadeService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {

    this.atividade = new Atividade(0, null);
  }

  salvarAtividade(atividade: Atividade) {

    let atividadeCadastrada: Atividade;

    this.atividadeService.cadastrarAtividade(atividade).subscribe((ati: Atividade) => {

      let dadosConfirmacao: ModalOptions = {
        initialState: {
          titulo: 'Confirmação de cadastro',
          texto: 'Atividade adicionada com sucesso!'
        }
      };

      let modalConfirmacao = this.modalService.show(ModalConfirmacaoComponent, dadosConfirmacao);
      
      this.atividade = new Atividade(0, null);
      atividadeCadastrada = {
        descricao: atividade.descricao,
        id: ati.id
      };
      this.atividadeCadastrada.emit(atividadeCadastrada);
    });
  }

}
