import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Procedimento } from 'src/app/_model/Procedimento';
import { AreaPrivadaService } from '../../area-privada.service';
import { EstadoAtendimento } from '../../../_model/EstadoAtendimento';
import { Cliente } from 'src/app/_model/Cliente';
import { Atendimento } from 'src/app/_model/Atendimento';
declare var $: any;

@Component({
    selector: 'app-cadastrarAtendimento',
    templateUrl: './cadastrar-atendimento.component.html',
    styleUrls: ['./cadastrar-atendimento.component.css']
})
export class CadastrarAtendimentoComponent implements OnInit {

    public listaProcedimento: Array<Procedimento> = new Array<Procedimento>();
    public listaProcedimentoSelecionado: Array<Procedimento> = new Array<Procedimento>();
    public listaEstadoAtendimento: Array<EstadoAtendimento> = new Array<EstadoAtendimento>();
    public procedimento: Procedimento = new Procedimento();
    public atendimento: Atendimento = new Atendimento();
    public cliente: Cliente = new Cliente();
    public nomeDataNascimentoCliente: string;
    public mostrarListaProcedimentosSelecionados:boolean = false;
    public dataAgendamento: Date;
    public horaAgendamento: string;

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

    public receberDiaSelecionado(dataSelecionada: Date){
        this.dataAgendamento = dataSelecionada;
        this._areaPrivadaService
        .listarAtendimentoDia()
        .subscribe(res => {
            console.log(res);
        }, error => {
            console.error(error);
        })
    }
    public abrirModal(idModal){
        $('#'+idModal).modal('show');

    }
    public fecharModal(idModal){
        $('#'+idModal).modal('hide');

        if(idModal === 'modalSelecaoProcedimento')
            this.mostrarListaProcedimentosSelecionados = true;
    }

    public receberCliente(cliente:Cliente){
        this.cliente = cliente;
        $('#modalBuscarCliente').modal('hide');
    }


    public selecionarProcedimento(procedimento:Procedimento){
        let index = this.listaProcedimentoSelecionado.indexOf(procedimento);
        if(index >= 0)
            this.listaProcedimentoSelecionado.splice(index,1);
        else
            this.listaProcedimentoSelecionado.push(procedimento);        
    }

    public removerProcedimento(item: Procedimento){
        let index = this.listaProcedimentoSelecionado.indexOf(item);
        if(index >= 0)
            this.listaProcedimentoSelecionado.splice(index, 1);
    }
    
    public calcularValorTotalProcedimentos(){
        let total = 0;
        this.listaProcedimentoSelecionado.forEach((item) => {
             total = total+item.valor;
        });
        return total;
    }
    
    private listaTodosProcedimento(){
        this._areaPrivadaService
            .listaProcedimento()
            .subscribe(res => {
                this.listaProcedimento = res;
                console.log(res);
            }, error => {
                console.error(error);
            });
    }

    ngOnInit(): void {
        this.listaTodosProcedimento();
        this.listaTodosEstadoAtendimento();
    }
}
