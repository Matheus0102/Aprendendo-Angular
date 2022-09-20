import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Telas
import { HomeComponent } from './telas/home/home.component';
import { LoginComponent } from './telas/login/login.component';
import { ProdutosComponent } from './telas/produtos/produtos.component';
import { ContatoComponent } from './telas/contato/contato.component';

//componentes
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

//Angular Forms
import { FormsModule } from '@angular/forms';
import { CadastroCreateComponent } from './telas/cadastro/cadastro-create/cadastro-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProdutosComponent,
    ContatoComponent,
    HeaderComponent,
    FooterComponent,
    CadastroCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
