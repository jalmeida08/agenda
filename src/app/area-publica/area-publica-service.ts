import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Usuario } from '../_model/Usuario';
import { urlBase } from '../_data/urlBase';
import { ObjetoLogin } from '../_model/ObjetoLogin';

@Injectable({
    providedIn: 'root'
})
export class AreaPublicaService {
    constructor(private _http: HttpClient) { }

    public login(objetoLogin: ObjetoLogin): Observable<any>{
        return this._http
            .post(`${urlBase.url}/area-publica/login`, objetoLogin)
            .pipe( map( res => { return res; }) );
    }

    public novoUsuarioAgenda(usuario: Usuario): Observable<any>{
        return this._http
            .post(`${urlBase.url}/area-publica/adicionar-novo-usuario`, usuario)
            .pipe( map( res => { return res; }) );
    }

    public recuperarDadosUsuarioPorChave(chave_ativacao: string): Observable<any>{
        return this._http
            .post(`${urlBase.url}/area-publica/buscar-token-usuario-ativacao`, chave_ativacao)
            .pipe( map( res => { return res; }) );
    }

    public finalizarCadastroUsuario(usuario: Usuario): Observable<any>{
        return this._http
            .post(`${urlBase.url}/area-publica/finalizar-cadastro-usuario`, usuario)
            .pipe( map( res => { return res; }) );
    }
}