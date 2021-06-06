import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCadastro } from './views/login-cadastro/login-cadastro.component';

const routes: Routes = [
  { path: 'login-cadastro', component: LoginCadastro },
  { path: '',   redirectTo: '/login-cadastro', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
