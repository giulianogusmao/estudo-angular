export class Usuario {
    private _login: string;
    private _senha: string;

    get login(): string {
        return this._login;
    }
    set login(login: string) {
        this._login = login;
    }

    get senha(): string {
        return this._senha;
    }
    set senha(senha: string) {
        this._senha = senha;
    }
}