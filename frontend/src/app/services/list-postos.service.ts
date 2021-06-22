import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Posto } from '../models/posto.model'

const url = 'http://localhost:3000'
const module = 'posto_saude'

@Injectable({
  providedIn: 'root'
})
export class ListPostosService {
  private readonly _postos = new BehaviorSubject<Posto[]>([])

  readonly postos$ = this._postos.asObservable()

  constructor(private http: HttpClient) { }

  get postos(): Posto[] {
    return this._postos.getValue()
  }

  set postos(val: Posto[]) {
    this._postos.next(val)
  }

  getAllPostos() {
    return this.http.get(`${url}/${module}`).pipe(map((postos) => this.postos = <Posto[]>postos))
  }

  getSinglePosto(id: number): Observable<Posto> {
    return this.http.get(`${url}/${module}/${id}`).pipe(map(posto => posto as Posto))
  }

  createSinglePosto(posto: Posto) {
    this.http.post(`${url}/${module}`, posto).subscribe(
      data => {
        this.getAllPostos()
      },
      error => console.log('oops', error)
    )
  }

  removeSinglePosto(id: number) {
    this.http.delete(`${url}/${module}/${id}`).subscribe(
      data => {
        this.getAllPostos()
      },
      error => console.log('oops', error)
    )
  }

  updateSinglePosto(posto: Posto) {
    this.http.put(`${url}/${module}/${posto.id}`, posto).subscribe(
      data => {
        this.getAllPostos()
      },
      error => console.log('oops', error)
    )
  }
}

