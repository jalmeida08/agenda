import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ObjetoLogin } from '../../_model/ObjetoLogin';
import { AreaPublicaService } from '../area-publica-service';

@Component({
    selector: 'login-name',
    templateUrl: './login.component.html',
    styleUrls: []
})
export class LoginComponent implements OnInit {
    constructor(
        private _areaPublicaService: AreaPublicaService,
        private _dataService: DataService,
        private _router: Router,
    ) { }

    public objetoLogin: ObjetoLogin = new ObjetoLogin();

    public salvar(){
        this._areaPublicaService
            .login(this.objetoLogin)
            .subscribe(res => {
                this._dataService.registrarSessao(res)
                this._router.navigate(["/home"]);
            }, error => {
                this._dataService.alerta(error.error, "danger", "Erro!");
            });
    }
    
    ngOnInit(): void { }
}
