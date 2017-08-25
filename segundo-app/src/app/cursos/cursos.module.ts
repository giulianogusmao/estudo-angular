import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos.routing.module';
import { CursosService } from './cursos.service';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoNomePipe } from './curso-nome.pipe';

@NgModule({
    imports: [
        CommonModule,
        CursosRoutingModule
    ],
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent,
        CursoNomePipe
    ],
    providers: [
        CursosService
    ],
    exports: [
        // CursosComponent
    ]
})

export class CursosModule {}