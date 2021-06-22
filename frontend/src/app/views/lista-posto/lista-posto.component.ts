import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Posto } from 'src/app/models/posto.model';
import { AuthenticationAPIService } from 'src/app/services/authentication-api.service';
import { GoogleMapsAPIService } from 'src/app/services/google-maps-api.service';
import { ListPostosService } from 'src/app/services/list-postos.service';

@Component({
  selector: 'app-lista-posto',
  templateUrl: './lista-posto.component.html',
  styleUrls: ['./lista-posto.component.scss']
})
export class ListaPostoComponent implements OnInit {

  loggedUserGeocode: number = 0
  listaPostos: Posto[] = []

  constructor(private listaPostosService: ListPostosService, private authenticationAPIService : AuthenticationAPIService, private googleMapsAPIService: GoogleMapsAPIService, private router: Router) { }

  ngOnInit(): void {
    if (this.authenticationAPIService.hasLoggedUser()) {
      this.loggedUserGeocode = this.googleMapsAPIService.getGeocodeFromAddress(this.authenticationAPIService.user.endereco)
      this.listaPostosService.getAllPostos().subscribe((postos: Posto[]) => {
        this.listaPostos = postos.map((posto) => {
          return <Posto>{
            ...posto,
            geocode: this.googleMapsAPIService.getGeocodeFromAddress(posto.endereco)
          }
        }).sort(this.sortPostos.bind(this))
      })
    } else {
      this.router.navigate(['/login-cadastro'])
    }
  }

  private sortPostos(a: Posto, b: Posto) {
    if (a.geocode && b.geocode) {
      return Math.abs(this.loggedUserGeocode-a.geocode) - Math.abs(this.loggedUserGeocode-b.geocode);
    }
    else {
      return 0
    }
  }
}
