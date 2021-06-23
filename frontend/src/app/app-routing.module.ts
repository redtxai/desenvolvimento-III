import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPostoComponent } from './views/lista-posto/lista-posto.component';
import { LoginCadastro } from './views/login-cadastro/login-cadastro.component';
import { NoticiasComponent } from './views/noticias/noticias.component';

const routes: Routes = [
  { path: 'login-cadastro', component: LoginCadastro },
  { path: '',   redirectTo: '/login-cadastro', pathMatch: 'full' },
  { path: 'lista-postos', component: ListaPostoComponent },
  { path: 'noticias', component: NoticiasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
