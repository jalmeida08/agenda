import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Cliente } from 'src/app/_model/Cliente';
import { AreaPrivadaService } from '../../area-privada.service';

@Component({
    selector: 'app-buscar-cliente',
    templateUrl: './buscar-cliente.component.html',
    styleUrls: ['./buscar-cliente-component.css']
})
export class BuscarClienteComponent implements OnInit {

    public cliente: Cliente = new Cliente();
    public listaClientes:Array<Cliente> = new Array<Cliente>();
    @Input() nomeDataNascimentoCliente: string;
    @Output() public emitterEnviarCliente = new EventEmitter();
    @Output() public emitterfecharModal = new EventEmitter();

    constructor(
        private _areaPrivadaService: AreaPrivadaService,
        private _dataService: DataService
    ) {}

    public buscarCliente(){
        this._areaPrivadaService
            .buscarCliente(this.cliente)
            .subscribe(res => {
                this.listaClientes = res;
            }, error => {
                this._dataService.alerta(error.error, 'danger', "Atenção!");
            });
    }

    public selecionarCliente(clienteSelecionado:Cliente){
        this.emitterEnviarCliente.emit(clienteSelecionado);
        this.listaClientes = new Array<Cliente>();
    }

    public limparCampos(){
        this.listaClientes = new Array<Cliente>();
        this.cliente = new Cliente();
    }

    public fecharModal(){
        this.emitterfecharModal.emit();
    }

    ngOnInit(): void {
        this.limparCampos();
    }
}
