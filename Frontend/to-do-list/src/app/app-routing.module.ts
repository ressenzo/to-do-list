import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroAtividadeComponent } from './components/cadastro-atividade/cadastro-atividade.component';


const routes: Routes = [
  {path: 'cadastro', component: CadastroAtividadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
