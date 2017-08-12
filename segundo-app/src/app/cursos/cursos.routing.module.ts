
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const CURSOS_ROUTES: Routes = [
    { path: '', component: CursosComponent, children:[
        { path: '404', component: CursoNaoEncontradoComponent },
        { path: ':id', component: CursoDetalheComponent }
    ] },
];

@NgModule({
    imports: [RouterModule.forChild(CURSOS_ROUTES)],
    exports: [RouterModule]
})

export class CursosRoutingModule {}