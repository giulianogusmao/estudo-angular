
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { LogoutComponent } from './logout/logout.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule' }, // lazy loading CursosModule
    { path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule' } // lazy loading AlunosModule
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}