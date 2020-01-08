import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-excluir-atividade',
  templateUrl: './modal-excluir-atividade.component.html',
  styleUrls: ['./modal-excluir-atividade.component.css']
})
export class ModalExcluirAtividadeComponent implements OnInit {

  private atividadeExcluida: EventEmitter<boolean> = new EventEmitter();
  private descricaoAtividade: string;

  constructor(
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

  fechar() {
    this.bsModalRef.hide();
  }

  excluir() {
    this.atividadeExcluida.emit(true);
  }

}
