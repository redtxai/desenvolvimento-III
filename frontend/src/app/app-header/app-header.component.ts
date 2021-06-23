import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationAPIService } from '../services/authentication-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeader {

  constructor(private authenticationAPIService : AuthenticationAPIService, private router: Router) {}
  navigateTo(module: string) {

    switch(module) {
      case 'inicio':
        if (this.authenticationAPIService.hasLoggedUser()) {
          this.router.navigate(['/lista-posto'])
        } else {
          this.router.navigate(['/'])
        }
        break
      case 'login':
        this.router.navigate(['/'])
        break
      case 'noticias':
        this.router.navigate(['/noticias'])
        break
      default:
        this.router.navigate(['/'])
        break
    }
  }
}
