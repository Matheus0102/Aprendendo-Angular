import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCreateComponent } from './Telas/cadastro/cadastro-create/cadastro-create.component';
import { ContatoComponent } from './Telas/contato/contato.component';
import { HomeComponent } from './Telas/home/home.component';
import { LoginComponent } from './Telas/login/login.component';
import { ProdutosReadComponent } from './Telas/produtos/produtos-read/produtos-read.component';
import { CadastroReadComponent } from './Telas/cadastro/cadastro-read/cadastro-read.component';
import { CadastroTabelaComponent } from './Telas/cadastro/cadastro-tabela/cadastro-tabela.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'index', component: HomeComponent
  },
  {
    path: 'produtos', component: ProdutosReadComponent
  },
  {
    path: 'contato', component: ContatoComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'cadastro', component: CadastroCreateComponent
  },
  {
    path:'cadastro-read', component: CadastroReadComponent
  },
  {
    path:'cadastro-tabela', component: CadastroTabelaComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
