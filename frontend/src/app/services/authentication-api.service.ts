import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Usuario } from '../models/usuario.model'

const url = 'http://localhost:3000'
const module = 'usuario'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationAPIService {
  private readonly _users = new BehaviorSubject<Usuario[]>([])
  private readonly _user = new BehaviorSubject<Usuario>(new Usuario())

  readonly users$ = this._users.asObservable()
  readonly user$ = this._users.asObservable()

  constructor(private http: HttpClient) { }

  get users(): Usuario[] {
    return this._users.getValue()
  }

  get user(): Usuario {
    return this._user.getValue()
  }

  set users(val: Usuario[]) {
    this._users.next(val)
  }

  set user(val: Usuario) {
    this._user.next(val)
  }

  verifyUserLogin(cpf: string, senha: string): Usuario | undefined {
    const user: Usuario | undefined = this.users.find((u) => u.cpf === cpf && u.senha === senha)
    return user
  }

  getAllUsers() {
    this.http.get(`${url}/${module}`).subscribe((users: any) => {
      this.users = <Usuario[]>users
    })
  }

  login(user: Usuario) {
    this.user = user
  }

  logout() {
    this.user = new Usuario()
  }

  hasLoggedUser() {
    return this.user.id || 0
  }
}

