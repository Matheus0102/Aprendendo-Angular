import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro.model';

@Component({
  selector: 'app-cadastro-read',
  templateUrl: './cadastro-read.component.html',
  styleUrls: ['./cadastro-read.component.css']
})
export class CadastroReadComponent implements OnInit {

  cadastro: Cadastro = {
    nome: '',
    senha:' '
  }

  constructor() { }

  ngOnInit(): void {
  }



}
