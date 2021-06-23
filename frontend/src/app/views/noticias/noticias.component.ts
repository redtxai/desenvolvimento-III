import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/models/noticia.model';
import { Posto } from 'src/app/models/posto.model';
import { AuthenticationAPIService } from 'src/app/services/authentication-api.service';
import { GoogleMapsAPIService } from 'src/app/services/google-maps-api.service';
import { ListPostosService } from 'src/app/services/list-postos.service';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  listaNoticias: Noticia[] = []

  constructor(private noticiasService: NoticiasService, private authenticationAPIService : AuthenticationAPIService, private router: Router) { }

  ngOnInit(): void {
    if (this.authenticationAPIService.hasLoggedUser()) {
      this.noticiasService.getAllNoticias().subscribe((data) => {
        console.log(data)
        this.listaNoticias = data
      })
    } else {
      this.router.navigate(['/'])
    }
  }
}
