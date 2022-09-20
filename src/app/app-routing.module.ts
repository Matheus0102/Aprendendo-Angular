import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCreateComponent } from './telas/cadastro/cadastro-create/cadastro-create.component';
import { ContatoComponent } from './telas/contato/contato.component';
import { HomeComponent } from './telas/home/home.component';
import { LoginComponent } from './telas/login/login.component';
import { ProdutosComponent } from './telas/produtos/produtos.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'home', component: HomeComponent 
  },
  {
    path:'index', component: HomeComponent
  },
  {
    path:'produtos', component: ProdutosComponent
  },
  {
    path:'contato', component: ContatoComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'cadastro', component: CadastroCreateComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
