import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { Atividade } from 'src/app/classes/atividade';
import { ListaService } from 'src/app/services/lista.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AtividadeService } from 'src/app/services/atividade.service';

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
  
  @Input()
  set atividadeCadastrada(atividade: Atividade) {
    
    if (atividade) {
      
      this.atividades.push(atividade);
    }
  }

  constructor(
    private listaService: ListaService,
    private modalService: BsModalService,
    private atividadeService: AtividadeService
  ) { }

  ngOnInit() {
    
    this.listarTodos();
  }

  listarTodos() {
    
    this.listaService.obterAtividades().subscribe((data: Atividade[]) => { this.atividades = data });
  }

  adicionarAtividade(atividade: Atividade) {

    this.atividades.push(atividade);
  }

  excluirAtividade() {    
    
    this.listaService.excluirAtividade(this.idAtividadeParaExcluir).subscribe(() => {
      this.listarTodos()
      this.modalRef.hide();
    });
  }

  modalExcluir(modal: TemplateRef<any>, idAtividadeParaExcluir: number, descricaoAtividadeParaExcluir: string) {

    this.idAtividadeParaExcluir = idAtividadeParaExcluir;
    this.descricaoAtividadeParaExcluir = descricaoAtividadeParaExcluir;
    this.modalRef = this.modalService.show(modal);
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
