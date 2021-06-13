import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationAPIService } from 'src/app/services/authentication-api.service';

@Component({
  selector: 'login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.scss']
})
export class LoginCadastro implements OnInit {
  cpf: string
  senha:string

  constructor(private authenticationAPIService : AuthenticationAPIService, private router: Router) {
  }

  ngOnInit() {
    this.authenticationAPIService.getAllUsers()
  }

  login() {
    console.log(this.cpf, this.senha)
    const user = this.authenticationAPIService.verifyUserLogin(this.cpf, this.senha)
    if (user) {
      this.router.navigate(['/lista-postos'])
    } else {
      console.error('Usuario ou senha invalido')
    }
  }
}
