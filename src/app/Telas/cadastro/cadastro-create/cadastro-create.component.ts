import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { Router } from '@angular/router';
import { Cadastro } from '../cadastro.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-create',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.css']
})
export class CadastroCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
