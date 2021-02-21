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
    public listaAtendimentosDoDia: Array<Atendimento> = new Array<Atendimento>();
    public procedimento: Procedimento = new Procedimento();
    public atendimento: Atendimento = new Atendimento();
    public atendimentoASerDetalhado = new Atendimento();
    public cliente: Cliente = new Cliente();
    public nomeDataNascimentoCliente: string;
    public mostrarListaProcedimentosSelecionados:boolean = false;
    public ishabilitaBtnSalvar: boolean = false;
    public dataAgendamento: Date;
    public horaAgendamento: string;
    public listaTelas:Array<number> = new Array(0,1,2,3);
    public telaAtual: number = 0;
    public valorDesconto: number = 0;
    public arrayTimeLineAgendaDiaSelecionado:Array<any> = new Array<any>();

    constructor(
        private _areaPrivadaService: AreaPrivadaService,
        private _dataService: DataService
    ) { }

    public listaTodosEstadoAtendimento(){
        this._areaPrivadaService
            .listaEstadoAtendimento()
            .subscribe(res => {
                this.listaEstadoAtendimento = res;
            }, error => {
                console.error(error.error);
                
            })
    }

    public receberDiaSelecionado(dataSelecionada: Date){
        this.dataAgendamento = dataSelecionada;
        this.atendimentosDiaSelecionado(dataSelecionada);
    }

    public atendimentosDiaSelecionado (diaSelecionado: Date){
        this._areaPrivadaService
        .atendimentosDiaSelecionado(diaSelecionado)
        .subscribe(res => {
             this.listaAtendimentosDoDia = res;
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
        this.fecharModal('modalBuscarCliente');
    }

    public abrirDetalheAgendamento(atendimentoDetalhado: Atendimento){
        this.atendimentoASerDetalhado = atendimentoDetalhado;
        this.abrirModal("modalDetalheAtendimento");
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
            }, error => {
                console.error(error);
            });
    }

    public avancarTela(){
        if(this.telaAtual === 0 && this.validarCampo()){
            this.telaAtual = 1;
            let numberHora:number = Number.parseInt(this.horaAgendamento.split(":")[0]);
            let numberMin:number = Number.parseInt(this.horaAgendamento.split(":")[1]);
            this.atendimento.dataAgendamento = this.dataAgendamento;
            this.atendimento.dataAtendimento = new Date();
            this.atendimento.dataAgendamento.setHours(numberHora, numberMin);
        } else if(this.telaAtual === 1){
            this.telaAtual = 2;
            if(this.atendimento.pessoa.indexOf(this.cliente) < 0)
                this.atendimento.pessoa.push(this.cliente);
        }else if (this.telaAtual === 2){
            this.telaAtual = 3;
            this.atendimento.procedimento = this.listaProcedimentoSelecionado;
            this.atendimento.valorTotal = this.calcularValorTotalProcedimentos();
            this.ishabilitaBtnSalvar = true;
        }
    }

    private validarCampo(): boolean{
        if(this.telaAtual === 0){
            if(typeof this.horaAgendamento === 'undefined' || this.horaAgendamento.length < 4){
                this._dataService.alerta("O campo hora é d epreenchimento obrigatório", "warning", "Atenção!")
                return false;
            }
        }
        return true;
    }

    public adicionarCliente(){
        if(this.atendimento.pessoa.indexOf(this.cliente) < 0)
                this.atendimento.pessoa.push(this.cliente);
    }
    
    public voltarTela(){
        if(this.telaAtual > 0)
            this.telaAtual--;
    }
    
    public salvar(){
        this.atendimento.desconto = this.valorDesconto;
        this._areaPrivadaService
            .salvarAtendimento(this.atendimento)
            .subscribe(res => {
                console.log(res);
            }, error => {
                console.log(error);
                
            })
    }

    public calcularDesconto(valorTotal: number, desconto: number){
        let valor = Number("0."+ ('00' + desconto).slice(-2));
        let total = valorTotal * valor;
        return valorTotal - total;
    }
    
    public receberEventoFecharModal(){
        this.fecharModal('modalBuscarCliente');
    }
    
    ngOnInit(): void {
        this.listaTodosProcedimento();
        this.listaTodosEstadoAtendimento();
        this.receberDiaSelecionado(new Date());
    }
}
