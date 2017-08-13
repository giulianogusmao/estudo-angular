
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticateGuard } from './guards/authenticate.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthenticateGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent, canActivate: [AuthenticateGuard] },
    { path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule', canActivate: [AuthenticateGuard] }, // lazy loading CursosModule
    { path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule', canActivate: [AuthenticateGuard] } // lazy loading AlunosModule
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}