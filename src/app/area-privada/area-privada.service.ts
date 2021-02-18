import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { urlBase } from '../_data/urlBase';
import { Atendimento } from '../_model/Atendimento';
import { Cliente } from '../_model/Cliente';
import { Procedimento } from '../_model/Procedimento';

@Injectable({
    providedIn: 'root'
})
export class AreaPrivadaService {

    constructor(private _http: HttpClient){}

    public salvarProcedimento(procedimento: Procedimento): Observable<any>{
        return this._http
            .post(`${urlBase.url}/procedimento/salvar`, procedimento)
            .pipe( map( res => { return res; }) );
    }

    public salvarCliente(cliente: Cliente): Observable<any> {
        return this._http
            .post(`${urlBase.url}/cliente/salvar`, cliente)
            .pipe( map( res => { return res; }) );
    }

    public listaProcedimento(): Observable<any> {
        return this._http
            .get(`${urlBase.url}/procedimento/lista-procedimento`)
            .pipe( map( res => { return res; }) );
    }

    public listaEstadoAtendimento(): Observable<any> {
        return this._http
            .get(`${urlBase.url}/estado-atendimento/lista-estado-atendimento`)
            .pipe( map( res => { return res; }) );
    }

    public listarAtendimentoDia(): Observable<any>{
        return this._http
            .get(`${urlBase.url}/atendimento/atendimentos-dia-atual`)
            .pipe( map( res => { return res; }) );
    }

    public buscarCliente(cliente: Cliente): Observable<any> {
        return this._http
            .post(`${urlBase.url}/cliente/buscar-cliente`, cliente)
            .pipe( map( res => { return res; }) );
    }

    public salvarAtendimento(atendimento: Atendimento): Observable<any> {
        return this._http
            .post(`${urlBase.url}/atendimento/salvar`, atendimento)
            .pipe( map( res => { return res; }) );
    }

    public atendimentosDiaSelecionado(dataSelecionada: Date): Observable<any>{
        return this._http
            .post(`${urlBase.url}/atendimento/atendimentos-dia-selecionado`, dataSelecionada)
            .pipe( map( res => { return res; }) );
    }

}