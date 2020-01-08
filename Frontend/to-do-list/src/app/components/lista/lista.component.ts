import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { Atividade } from 'src/app/classes/atividade';
import { ListaService } from 'src/app/services/lista.service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { AtividadeService } from 'src/app/services/atividade.service';
import { ModalExcluirAtividadeComponent } from '../modal-excluir-atividade/modal-excluir-atividade.component';
import { ModalConfirmacaoComponent } from '../modal-confirmacao/modal-confirmacao.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public atividades: Atividade[] = [];
  public modalRef: BsModalRef;
  public descricaoAtividadeParaExcluir: string = null;
  public idAtividadeParaExcluir: number = 0;

  //#region Alterar
  public descricaoAtividadeParaAlterar: string = null;
  public idAtividadeParaAlterar: number = 0;
  //#endregion

  public mensagemErro: string = "";
  
  @Input()
  set atividadeCadastrada(atividade: Atividade) {
    
    if (atividade) {
      
      this.atividades.push(atividade);
    }
  }

  bsModalRef: BsModalRef;

  constructor(
    private listaService: ListaService,
    private modalService: BsModalService,
    private atividadeService: AtividadeService
  ) { }

  ngOnInit() {
    
    this.listarTodos();
  }

  listarTodos() {
    
    this.listaService.obterAtividades().subscribe((data: Atividade[]) => { 
        this.atividades = data
    });
  }

  modalErro(modal: object, erro: any) {
    
    this.mensagemErro = erro;
    this.modalRef = this.modalService.show(modal);
    this.modalRef.content = "a";
  }

  adicionarAtividade(atividade: Atividade) {

    this.atividades.push(atividade);
  }

  excluir(idAtivade: number, descricaoAtividade) {

    const dadosExclusao: ModalOptions = {
      initialState: {
        descricaoAtividade
      }
    };

    this.bsModalRef = this.modalService.show(ModalExcluirAtividadeComponent, dadosExclusao);
    
    this.bsModalRef.content.atividadeExcluida.subscribe((excluir: boolean) => {
      
      this.listaService.excluirAtividade(idAtivade).subscribe(exclusao => {
        
        this.bsModalRef.hide();
        const dadosConfirmacao: ModalOptions = {
          initialState: {
            titulo: 'Confirmação de exclusão',
            texto: 'Atividade excluída com sucesso!'
          }
        };
        
        let modalConfirmacao = this.modalService.show(ModalConfirmacaoComponent, dadosConfirmacao);
        
        modalConfirmacao.content.modalFechou.subscribe((fechou: boolean) => {

          this.listarTodos();
        });
      });
    });
  }

  modalAlterar(modal: TemplateRef<any>, idAtividadeParaAlterar: number, descricaoAtividadeParaAlterar: string) {

    this.descricaoAtividadeParaAlterar = descricaoAtividadeParaAlterar;
    this.idAtividadeParaAlterar = idAtividadeParaAlterar;
    this.modalRef = this.modalService.show(modal);
  }

  alterarAtividade(descricaoParaAlterar: string) {

    let atividadeAlteracao: Atividade = {
      descricao: descricaoParaAlterar,
      id: this.idAtividadeParaAlterar
    };
    
    this.atividadeService.alterarAtividade(atividadeAlteracao).subscribe(() => {
      this.listarTodos();
      this.modalRef.hide();
    });
  }
}
