import { Component, OnInit } from '@angular/core';
import { Atividade } from '../../classes/atividade';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-alterar-atividade',
  templateUrl: './modal-alterar-atividade.component.html',
  styleUrls: ['./modal-alterar-atividade.component.css']
})
export class ModalAlterarAtividadeComponent implements OnInit {

  descricao: string;
  public atividade: Atividade;

  constructor(
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit() {

    this.atividade = new Atividade(0, this.descricao);
  }

  fechar() {

    this.bsModalRef.hide();
  }
}
