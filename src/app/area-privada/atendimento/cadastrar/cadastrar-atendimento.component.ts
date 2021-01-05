import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Procedimento } from 'src/app/_model/Procedimento';
import { AreaPrivadaService } from '../../area-privada.service';
import { EstadoAtendimento } from '../../../_model/EstadoAtendimento';

@Component({
    selector: 'cadastrarAtendimento',
    templateUrl: './cadastrar-atendimento.component.html',
    styleUrls: []
})
export class CadastrarAtendimentoComponent implements OnInit {

    public listaProcedimento: Array<Procedimento> = new Array<Procedimento>();
    public listaEstadoAtendimento: Array<EstadoAtendimento> = new Array<EstadoAtendimento>();

    constructor(
        private _areaPrivadaService: AreaPrivadaService,
        private _dataService: DataService
    ) { }


    public listaTodosEstadoAtendimento(){
        this._areaPrivadaService
            .listaEstadoAtendimento()
            .subscribe(res => {
                this.listaEstadoAtendimento = res;
                console.log(res);
            }, error => {
                console.error(error.error);
                
            })
    }


    private listaTodosProcedimento(){
        this._areaPrivadaService
            .listaProcedimento()
            .subscribe(res => {
                this.listaProcedimento = res;
            }, error => {
                console.error(error);
            });
    }

    ngOnInit(): void {
        this.listaTodosProcedimento();
        this.listaTodosEstadoAtendimento();
    }
}
