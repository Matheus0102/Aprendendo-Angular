import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
});

export class CadastroService {

  constructor() {
    }
    showMessege(msg: string, isError: boolean = false) : void{
      this.snackBar.open(msg, 'X', {
        duration: 600,
        verticalPosition: "top",
        panelClass: isError ? ['errorMsg'] : ['successMsg']
      });
    }


}
