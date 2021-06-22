import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Usuario } from '../models/usuario.model'

const url = 'http://localhost:3000'
const module = 'usuario'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  createSingleUser(usuario: Usuario) {
    return this.http.post(`${url}/${module}`, usuario)
  }

  updateSingleUser(usuario: Usuario) {
    this.http.put(`${url}/${module}/${usuario.id}`, usuario)
  }
}

