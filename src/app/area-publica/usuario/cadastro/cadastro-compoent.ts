import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Pessoa } from 'src/app/_model/Pessoa';
import { Usuario } from '../../../_model/Usuario';
import { AreaPublicaService } from '../../area-publica-service';

@Component({
    selector: 'cadastroUsuario',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

    public usuario: Usuario = new Usuario();
    public pessoa: Pessoa = new Pessoa();

    constructor(
        private _areaPublicaService: AreaPublicaService,
        private _dataService: DataService,
    ) {
        
    }

    public salvar() {
        this.usuario.pessoa = this.pessoa;
        this._areaPublicaService
            .novoUsuarioAgenda(this.usuario)
            .subscribe(() => {
                this._dataService.alerta("Salvo com sucesso", "success", "Sucesso!");
                this._dataService.alerta("Mandamos um link para finalizar o cadastro no e-mail solicitado", "info", "Informação");
                this.limparVariavel();
            }, error => {
                this._dataService.alerta(error.error, "danger", "Erro!");
            })
    }

    private limparVariavel(){
        this.pessoa = new Pessoa();
        this.usuario = new Usuario();
    }
    
    ngOnInit(): void { }
}
