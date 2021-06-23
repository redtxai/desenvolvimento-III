import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Noticia } from '../models/noticia.model'

const url = 'http://localhost:3000'
const module = 'noticia'

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private readonly _noticias = new BehaviorSubject<Noticia[]>([])

  readonly noticias$ = this._noticias.asObservable()

  constructor(private http: HttpClient) { }

  get noticias(): Noticia[] {
    return this._noticias.getValue()
  }

  set noticias(val: Noticia[]) {
    this._noticias.next(val)
  }

  getAllNoticias() {
    return this.http.get(`${url}/${module}`).pipe(map((noticias) => this.noticias = <Noticia[]>noticias))
  }
}
