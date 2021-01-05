import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Procedimento } from '../../../_model/Procedimento';
import { AreaPrivadaService } from '../../area-privada.service';
@Component({
    selector: 'CadastrarProcedimentoComponent',
    templateUrl: './cadastrar-procedimento.component.html',
    styleUrls: []
})
export class CadastrarProcedimentoComponent implements OnInit {

    constructor(
        private _areaPrivadaService: AreaPrivadaService,
        private _data: DataService
    ) { }

    public procedimento: Procedimento = new Procedimento();


    public salvar(): void{
        this._areaPrivadaService
            .salvarProcedimento(this.procedimento)
            .subscribe(res => {
                this._data.alerta("Procedimento salvo com sucesso", "success", "Sucesso!");
                this.procedimento = new Procedimento();
            }, error => {
                this._data.alerta(error.error, "danger", "Erro!");
            })
        
    }
    
    ngOnInit(): void {}


}
