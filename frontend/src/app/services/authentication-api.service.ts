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

  readonly users$ = this._users.asObservable()

  constructor(private http: HttpClient) { }

  get users(): Usuario[] {
    return this._users.getValue()
  }

  set users(val: Usuario[]) {
    this._users.next(val)
  }

  verifyUserLogin(cpf: string, senha: string): Usuario | undefined {
    const user = this.users.find((u) => u.cpf === cpf && u.senha === senha)
    return user
  }

  getAllUsers() {
    this.http.get(`${url}/${module}`).subscribe((users: any) => {
      this.users = <Usuario[]>users
    })
  }

  getSingleUser(id: number): Observable<Usuario> {
    return this.http.get(`${url}/${module}/${id}`).pipe(map(usuario => usuario as Usuario))
  }

  createSingleUser(usuario: Usuario) {
    this.http.post(`${url}/${module}`, usuario).subscribe(
      data => {
        this.getAllUsers()
      },
      error => console.log('oops', error)
    )
  }

  removeSingleUser(id: number) {
    this.http.delete(`${url}/${module}/${id}`).subscribe(
      data => {
        this.getAllUsers()
      },
      error => console.log('oops', error)
    )
  }

  updateSingleUser(usuario: Usuario) {
    this.http.put(`${url}/${module}/${usuario.id}`, usuario).subscribe(
      data => {
        this.getAllUsers()
      },
      error => console.log('oops', error)
    )
  }
}

