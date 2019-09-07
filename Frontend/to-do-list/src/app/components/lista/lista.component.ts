import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { Atividade } from 'src/app/classes/atividade';
import { ListaService } from 'src/app/services/lista.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

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
  
  @Input()
  set atividadeCadastrada(atividade: Atividade) {
    
    if (atividade) {
      
      this.atividades.push(atividade);
    }
  }

  constructor(private listaService: ListaService, private modalService: BsModalService) { }

  ngOnInit() {
    
    this.listarTodos();
  }

  listarTodos() {
    
    this.listaService.obterAtividades().subscribe((data: Atividade[]) => { this.atividades = data });
  }

  adicionarAtividade(atividade: Atividade) {

    this.atividades.push(atividade);
  }

  excluir() {    
    
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

}
