import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { Atividade } from '../../classes/atividade';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalExcluirAtividadeComponent } from '../modal-excluir-atividade/modal-excluir-atividade.component';
import { ModalConfirmacaoComponent } from '../modal-confirmacao/modal-confirmacao.component';
import { ModalAlterarAtividadeComponent } from '../modal-alterar-atividade/modal-alterar-atividade.component';
import { AtividadeService } from '../../services/atividade.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  private atividades: Atividade[] = [];
  private bsModalRef: BsModalRef;  
  private idAtividadeParaExcluir: number = 0;
  private atividadeAlterada = new Atividade(0, null);
  
  @Input()
  set atividadeCadastrada(atividade: Atividade) {
    
    if (atividade) {
      
      this.atividades.push(atividade);
    }
  }

  constructor(
    private modalService: BsModalService,
    private atividadeService: AtividadeService
  ) { }

  ngOnInit() {
    
    this.listarTodos();
  }

  listarTodos() {
    
    this.atividadeService.obterAtividades().subscribe((data: Atividade[]) => { 
        this.atividades = data
    });
  }

  excluir(idAtividade: number, descricaoAtividade: string) {

    this.idAtividadeParaExcluir = idAtividade;
    
    const dadosExclusao: ModalOptions = {
      initialState: {
        descricaoAtividade
      }
    };

    this.bsModalRef = this.modalService.show(ModalExcluirAtividadeComponent, dadosExclusao);
    
    this.bsModalRef.content.atividadeExcluida.subscribe((excluir: boolean) => {
      
      this.atividadeService.excluirAtividade(idAtividade).subscribe(exclusao => {

        this.modalConfirmacao('Confirmação de exclusão', 'Atividade excluída com sucesso!', this.excluirAtividadeLista());
      });
    });
  }

  excluirAtividadeLista() {

    this.atividades = this.atividades.filter(ati => ati.id !== this.idAtividadeParaExcluir);
    this.idAtividadeParaExcluir = 0;
  }

  alterar(idAtivade: number, descricaoAtividade: string) {

    const dadosAlteracao: ModalOptions = {
      initialState: {
        descricao: descricaoAtividade
      }
    };

    this.bsModalRef = this.modalService.show(ModalAlterarAtividadeComponent, dadosAlteracao);

    this.bsModalRef.content.descricaoAlterada.subscribe((descricao: string) => {

      this.atividadeAlterada = {
        descricao,
        id: idAtivade
      };

      this.atividadeService.alterarAtividade(this.atividadeAlterada).subscribe(alteracao => {
        
        this.modalConfirmacao("Confirmação de alteração", "Atividade alterada com sucesso!", this.alterarAtividadeLista());
      });
    });
  }

  modalConfirmacao(titulo: string, texto: string, metodo: void) {

    this.bsModalRef.hide();
    const dadosConfirmacao: ModalOptions = {
      initialState: {
        titulo,
        texto
      }
    };
    
    let modalConfirmacao = this.modalService.show(ModalConfirmacaoComponent, dadosConfirmacao);

    modalConfirmacao.content.modalFechou.subscribe((fechou: boolean) => {

      metodo;
    });
  }

  alterarAtividadeLista() {
    
    let indiceAtividade: number = this.atividades.findIndex(ati => ati.id === this.atividadeAlterada.id);
    this.atividades[indiceAtividade] = this.atividadeAlterada;
  }
}
