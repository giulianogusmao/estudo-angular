import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable()
export class UsuariosService {
    private usuarios: Usuario[];

    constructor() {
        this.usuarios = [
            <Usuario>{ login: 'giuliano', senha: 'teste', admin: true },
            <Usuario>{ login: 'teste', senha: 'teste' },
            // new Usuario('teste', 'teste'),
        ]
    }

    validaUsuario(usuario: Usuario): boolean {
        for(let usu of this.usuarios) {
            if (usu.login === usuario.login && usu.senha === usuario.senha) {
                usuario.admin = usu.admin;
                return true;
            }
        }

        return false;
    }
}