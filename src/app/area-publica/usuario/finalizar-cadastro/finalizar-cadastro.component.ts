import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Usuario } from 'src/app/_model/Usuario';
import { Funcionario } from '../../../_model/Funcionario';
import { AreaPublicaService } from '../../area-publica-service';

@Component({
    selector: 'finalizar-cadastro-name',
    templateUrl: './finalizar-cadastro.component.html',
    styleUrls: ['./finalizar-cadastro.component.css']
})
export class FinalizarCadastroComponent implements OnInit {

    private _chaveAtivacao: string;
    public usuario: Usuario = new Usuario();
    public funcionario: Funcionario = new Funcionario();

    constructor(
        private _areaPublicaService: AreaPublicaService,
        private _routerParam: ActivatedRoute,
        private _dataService: DataService,
        private _router: Router,
    ) { }

    private buscarInformacoesUsuario(){
        this._routerParam.params.subscribe(p => {this._chaveAtivacao =  p['chave_ativacao']});
        this._areaPublicaService
            .recuperarDadosUsuarioPorChave(this._chaveAtivacao)
            .subscribe(res => {
                this.usuario = res;
                this.funcionario = this.usuario.pessoa;
            }, error => {
                this._dataService.alerta(error.error, "danger", "ERRO!");
            })        
    }

    public salvar(){
        this._areaPublicaService
            .finalizarCadastroUsuario(this.usuario)
            .subscribe(res => {
                this._dataService.registrarSessao(res)
                this._router.navigate(["/home"]);
            }, error => {
                this._dataService.alerta(error.error, "danger", "ERRO!");
            })
    }

    ngOnInit(): void {
        this.buscarInformacoesUsuario();
    }
}
