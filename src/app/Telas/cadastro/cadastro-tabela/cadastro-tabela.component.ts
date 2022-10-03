import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-tabela',
  templateUrl: './cadastro-tabela.component.html',
  styleUrls: ['./cadastro-tabela.component.css']
})

export class CadastroTabelaComponent implements OnInit {

  Cadastro: Cadastro[] | undefined
  displayedColumns = ['id', 'nome', 'senha', 'action'];

  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
    this.cadastroService.read().subscribe(cadastros => {
      this.Cadastro = cadastros
    })
  }

}
