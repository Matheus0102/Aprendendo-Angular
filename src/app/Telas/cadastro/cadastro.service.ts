import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Cadastro } from './cadastro.model';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CadastroService {

  baseUrl = "http://localhost:3001/login" 


  // create(cadastro: Cadastro) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private snackBar: MatSnackBar, private http: HttpClient ) {
    }
    showMessege(msg: string, isError: boolean = false) : void{
      this.snackBar.open(msg, 'X', {
        duration: 600,
        verticalPosition: "top",
        panelClass: isError ? ['errorMsg'] : ['successMsg']
      });
    }

    create(cadastro: Cadastro): Observable<Cadastro>{
      return this.http.post<Cadastro>(this.baseUrl, cadastro)
    }


}
