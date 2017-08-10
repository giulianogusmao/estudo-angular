import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

@Injectable()
export class Pagina {
    private _numero: number;
    private _inscricao: Subscription;

    // event compartilhado
    static inscricao: Subscription;

    set numero(numero: number) {
        this._numero = numero;
    }

    get numero(): number {
        return this._numero || 0;
    }

    set inscricao(inscricao: Subscription) {
        this._inscricao = inscricao;
    }

    get inscricao(): Subscription {
        return this._inscricao;
    }
}