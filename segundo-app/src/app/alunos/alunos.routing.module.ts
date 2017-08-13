import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosGuard } from './guards/alunos.guard';
import { AlunosDeactivateGuard } from './guards/alunos-deactivate.guard';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

const ALUNOS_ROUTES: Routes = [
    {
        path: '',
        component: AlunosComponent,
        canActivateChild: [AlunosGuard],
        children: [
            { 
                path: 'novo', 
                component: AlunoFormComponent,
                canDeactivate: [AlunosDeactivateGuard],
            },
            { 
                path: ':id', 
                component: AlunoDetalheComponent 
            },
            { 
                path: ':id/editar', 
                component: AlunoFormComponent,
                canDeactivate: [AlunosDeactivateGuard],
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(ALUNOS_ROUTES)],
    exports: [RouterModule]
})

export class AlunosRoutingModule { }