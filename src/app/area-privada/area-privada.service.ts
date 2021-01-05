import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { urlBase } from '../_data/urlBase';
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

}