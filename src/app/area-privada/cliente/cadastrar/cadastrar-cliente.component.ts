import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Contato } from 'src/app/_model/Contato';
import { Cliente } from '../../../_model/Cliente';
import { Telefone } from '../../../_model/Telefone';
import { AreaPrivadaService } from '../../area-privada.service';

@Component({
    selector: 'cadastraCliente',
    templateUrl: './cadastrar-cliente.component.html',
    styleUrls: []
})
export class CadastrarClienteComponent implements OnInit {

    public cliente: Cliente = new Cliente();
    public telefone: Telefone = new Telefone();
    public listaTelefone: Array<Telefone> = new Array<Telefone>();
    private contato: Contato = new Contato();

    constructor(
        private _areaPrivadaService: AreaPrivadaService,
        private _dataService: DataService
    ) { }

    public salvar(): void {
        this.contato.telefone = this.listaTelefone;
        this.cliente.contato = this.contato;
        this._areaPrivadaService
            .salvarCliente(this.cliente)
            .subscribe(res => {
                this._dataService.alerta("Salvo com sucesso", "success", "Sucesso!");
            }, error => {
                this._dataService.alerta(error.error, "danger", "Erro!");
            })
    }

    public adicionarTelefone() {
        if(this.listaTelefone.indexOf(this.telefone) < 0){
            this.listaTelefone.push(this.telefone);
            this.telefone = new Telefone();
        }
    }

    public removerTelefoneLista(telefone: Telefone){
        let index = this.listaTelefone.indexOf(telefone);
        if(index >= 0)
            this.listaTelefone.splice(index, 1);
    }

    ngOnInit(): void { }
}
