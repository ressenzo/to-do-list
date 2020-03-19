import { Component, OnInit, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  styleUrls: ['./modal-confirmacao.component.css']
})
export class ModalConfirmacaoComponent implements OnInit {

  private modalFechou: EventEmitter<boolean> = new EventEmitter();
  titulo: string;
  texto: string;

  constructor(
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

  fechar() {
    this.bsModalRef.hide();
    this.modalFechou.emit(true);
  }

}
