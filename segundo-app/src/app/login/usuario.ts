export class Usuario {
    private _login: string;
    private _senha: string;
    private _admin?: boolean = false;

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

    get admin(): boolean {
        return this._admin;
    }
    set admin(admin: boolean) {
        this._admin = admin;
    }
}