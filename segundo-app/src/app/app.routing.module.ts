import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticateGuard } from './guards/authenticate.guard';
import { CursosGuard } from './guards/cursos.guard';
// import { AlunosGuard } from './guards/alunos.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const appRoutes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent 
    },
    { 
        path: 'logout', 
        component: LogoutComponent, 
        canActivate: [AuthenticateGuard] 
    },
    { 
        path: 'cursos', 
        loadChildren: 'app/cursos/cursos.module#CursosModule', // lazy loading CursosModule
        canActivate: [AuthenticateGuard], // verifica se o usuário tem acesso à aplicação
        canLoad: [AuthenticateGuard], // verifica se o usuário pode carregar o módulo
        canActivateChild: [CursosGuard], // verifica restrições as rotas filhas
    }, 
    { 
        path: 'alunos', 
        loadChildren: 'app/alunos/alunos.module#AlunosModule', // lazy loading AlunosModule
        canActivate: [AuthenticateGuard], // verifica se o usuário tem acesso à aplicação
        canLoad: [AuthenticateGuard], // verifica se o usuário pode carregar o módulo
        // canActivateChild: [AlunosGuard] 
    }, 
    { 
        path: 'home', 
        component: HomeComponent, 
        canActivate: [AuthenticateGuard], // verifica se o usuário tem acesso à aplicação
    },
    { 
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PaginaNaoEncontradaComponent,
        // canActivate: [AuthenticateGuard], // verifica se o usuário tem acesso à aplicação
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
    exports: [RouterModule]
})

export class AppRoutingModule {}