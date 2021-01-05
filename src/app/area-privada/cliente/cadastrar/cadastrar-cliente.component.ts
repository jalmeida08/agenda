import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Cliente } from '../../../_model/Cliente';
import { AreaPrivadaService } from '../../area-privada.service';

@Component({
    selector: 'cadastraCliente',
    templateUrl: './cadastrar-cliente.component.html',
    styleUrls: []
})
export class CadastrarClienteComponent implements OnInit {

    public cliente: Cliente = new Cliente();

    constructor(
        private _areaPrivadaService: AreaPrivadaService,
        private _dataService: DataService
    ) { }

    public salvar(): void {
        this._areaPrivadaService
            .salvarCliente(this.cliente)
            .subscribe(res => {
                this._dataService.alerta("Salvo com sucesso", "success", "Sucesso!");
            }, error => {
                this._dataService.alerta(error.error, "danger", "Erro!");
            })
    }

    ngOnInit(): void { }
}
