import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlunosRoutingModule } from './alunos.routing.module';

import { AlunosService } from './alunos.service';
import { AlunosGuard } from './guards/alunos.guard';
import { AlunosDeactivateGuard } from './guards/alunos-deactivate.guard';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

@NgModule({
    imports:[
        CommonModule,
        AlunosRoutingModule,
        FormsModule
    ],
    declarations: [
        AlunosComponent,
        AlunoFormComponent,
        AlunoDetalheComponent
    ],
    exports: [
        AlunosComponent
    ],
    providers: [
        AlunosService,
        AlunosGuard,
        AlunosDeactivateGuard
    ]
})

export class AlunosModule {}