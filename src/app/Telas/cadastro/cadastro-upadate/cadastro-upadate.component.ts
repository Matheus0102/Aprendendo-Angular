import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from '../cadastro.service';
import { Cadastro } from '../cadastro.model';

@Component({
  selector: 'app-cadastro-upadate',
  templateUrl: './cadastro-upadate.component.html',
  styleUrls: ['./cadastro-upadate.component.css']
})
export class CadastroUpadateComponent implements OnInit {

  cadastro: Cadastro;

  constructor(private cadastroService: CadastroService,
              private router: Router,
              private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.cadastroService.readById(id).subscribe(cadastro => {
      this.cadastro = cadastro
    });
  }

  updateCadastro(): void{
    this.cadastroService.updateCadastro(this.cadastro).subscribe(() => {
      this.cadastroService.showMessege('O usuario foi atualizado')
      this.router.navigate(["/cadastro/tabela"]);
    });
  }

  cancelarCadastro(): void{
    this.router.navigate(['/cadastro'])

  }

  tabelasCadastro(): void{
    this.router.navigate(['/cadastro/tabela'])
  }
}
