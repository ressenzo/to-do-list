import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './components/lista/lista.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { CadastroAtividadeComponent } from './components/cadastro-atividade/cadastro-atividade.component';
import { ModalExcluirAtividadeComponent } from './components/modal-excluir-atividade/modal-excluir-atividade.component';
import { ModalConfirmacaoComponent } from './components/modal-confirmacao/modal-confirmacao.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormularioComponent,
    CadastroAtividadeComponent,
    ModalExcluirAtividadeComponent,
    ModalConfirmacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [
    BsModalRef
  ],
  entryComponents: [
    ModalExcluirAtividadeComponent,
    ModalConfirmacaoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
