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
import { ContainerComponent } from './components/container/container.component';
import { ModalExcluirAtividadeComponent } from './components/modais/modal-excluir-atividade/modal-excluir-atividade.component';
import { ModalConfirmacaoComponent } from './components/modais/modal-confirmacao/modal-confirmacao.component';
import { ModalAlterarAtividadeComponent } from './components/modais/modal-alterar-atividade/modal-alterar-atividade.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormularioComponent,
    ContainerComponent,
    ModalExcluirAtividadeComponent,
    ModalConfirmacaoComponent,
    ModalAlterarAtividadeComponent
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
    ModalConfirmacaoComponent,
    ModalAlterarAtividadeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
