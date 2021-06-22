import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthenticationAPIService } from 'src/app/services/authentication-api.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.scss']
})
export class LoginCadastro implements OnInit {
  cpf: string
  senha: string

  cadastroCpf = ''
  cadastroSenha = ''
  confirmarSenha = ''

  endereco = ''
  possuiComorbidade = false
  condicaoSaude = ''
  dataNascimento = ''

  stepTwo = false

  constructor(private authenticationAPIService : AuthenticationAPIService, private usuarioService: UsuarioService, private router: Router) {
  }

  ngOnInit() {
    this.authenticationAPIService.getAllUsers()
  }

  login() {
    const user: Usuario | undefined = this.authenticationAPIService.verifyUserLogin(this.cpf, this.senha)
    if (user) {
      this.authenticationAPIService.login(user)
      this.router.navigate(['/lista-postos'])
    } else {
      console.error('Usuario ou senha invalido')
    }
  }

  cadastrar() {
    if (this.cadastroSenha && this.confirmarSenha
      && this.cadastroSenha === this.confirmarSenha
      && this.cadastroCpf
      && this.endereco) {
      const user = new Usuario()
      user.cpf = this.cadastroCpf

      const date = new Date(this.dataNascimento);
      user.dtNasc = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

      const birthday = +new Date(this.dataNascimento);
      const age = ~~((Date.now() - birthday) / (31557600000));

      user.endereco = this.endereco
      user.possui_comorbidade = this.possuiComorbidade
      user.pode_vacinar = this.possuiComorbidade || age >= 60
      user.condicao_saude = this.possuiComorbidade ? this.condicaoSaude : ''
      user.senha = this.cadastroSenha
      this.usuarioService.createSingleUser(user).subscribe(
        data => {
          this.router.navigate(['/lista-postos'])
        },
        error => console.log('oops', error)
      )
    } else {
      console.error('error cadastro')
    }
  }

  goToStepOne() {
    this.stepTwo = false
  }

  goToStepTwo() {
    this.stepTwo = true
  }
}
