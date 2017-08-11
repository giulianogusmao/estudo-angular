import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

export class Pagina implements OnInit {
    
    private _numero: number;
    private _total: number;
    private _inscricao: Subscription;
    // private _route: ActivatedRoute;
    // private _router: Router;

    private _repeat: boolean = false;
    btnVoltar: object = {}
    btnProximo: object = {}

    // event compartilhado
    static inscricao: Subscription;

    set numero(numero: number) {
        this._numero = numero || 1;
        this._disableBtns();
    }

    get numero(): number {
        return this._numero || 0;
    }

    set repeat(_repeat: boolean) {
        this._repeat = _repeat;
    }

    get repeat(): boolean {
        return this._repeat;
    }

    set inscricao(inscricao: Subscription) {
        this._inscricao = inscricao;
    }

    get inscricao(): Subscription {
        return this._inscricao;
    }


    proximaPagina(): void {
        if (this.numero < this._total)
            this.numero++;
        else if (this.repeat)
            this.numero = 1;
    }

    voltarPagina(): void {
        if (this.numero > 1) {
            this.numero--;
        } else if (this.repeat)
            this.numero = this._total;
    }

    getPaginas(): number[] {
        let paginas: number[] = [];

        for(let i = 1; i <= this._total; i++) {
            paginas.push(i);
        }

        return paginas;
    }

    private _disableBtns() {
        this.btnVoltar['disabled'] = (this.numero <= 1 && !this.repeat);
        this.btnProximo['disabled'] = (this.numero >= this._total && !this.repeat);
    }

    constructor(
        // private _route: ActivatedRoute,
        // private _router: Router
    ) {
        this._total = 10;
        this._disableBtns();
    }

    ngOnInit() {        
    }
}