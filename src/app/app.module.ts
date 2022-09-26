import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Telas
import { HomeComponent } from './Telas/home/home.component';
import { LoginComponent } from './Telas/login/login.component';
import { ContatoComponent } from './Telas/contato/contato.component';

//componentes
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

//Angular Forms
import { FormsModule } from '@angular/forms';
import { CadastroCreateComponent } from './Telas/cadastro/cadastro-create/cadastro-create.component';
import { ProdutosCreateComponent } from './Telas/produtos/produtos-create/produtos-create.component';
import { CadastroDeleteComponent } from './Telas/cadastro/cadastro-delete/cadastro-delete.component';
import { CadastroReadComponent } from './Telas/cadastro/cadastro-read/cadastro-read.component';
import { CadastroUpadateComponent } from './Telas/cadastro/cadastro-upadate/cadastro-upadate.component';
import { CadastroTabelaComponent } from './Telas/cadastro/cadastro-tabela/cadastro-tabela.component';
import { ProdutosDeleteComponent } from './Telas/produtos/produtos-delete/produtos-delete.component';
import { ProdutosReadComponent } from './Telas/produtos/produtos-read/produtos-read.component';
import { ProdutosUpdateComponent } from './Telas/produtos/produtos-update/produtos-update.component';
import { ProdutosTabelaComponent } from './Telas/produtos/produtos-tabela/produtos-tabela.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContatoComponent,
    HeaderComponent,
    FooterComponent,
    CadastroCreateComponent,
    ProdutosCreateComponent,
    CadastroDeleteComponent,
    CadastroReadComponent,
    CadastroUpadateComponent,
    CadastroTabelaComponent,
    ProdutosDeleteComponent,
    ProdutosReadComponent,
    ProdutosUpdateComponent,
    ProdutosTabelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
