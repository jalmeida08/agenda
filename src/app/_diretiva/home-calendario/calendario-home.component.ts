import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-calendariopaginaicial',
    templateUrl: './calendario-home.component.html',
    styleUrls: ['./calendario-home.component.css']
})
export class CalendarioHomeComponent implements OnInit {
    constructor() { }

    public arrayDiasMes:Array<Date> = new Array<Date>();
    public arrayDiasSemana:Array<string> = new Array<string>('Dom','Seg','Ter','Qua','Qui','Sex', 'Sáb');
    private arrayNomeMes: Array<string> = new Array(
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    );
    public nomeMes: string = '';
    public ano = new Date().getFullYear();
    public diaInitCalendar:string = '';
    public diaSelecionado: number = 0;
    public classDiaSelecionado: object = {'outline': 'none', 'background-color': '#3ebd93', 'color': '#FFF'};
    public classDiaAatual: object = {'outline': 'none', 'background-color': '#147d64', 'color': '#FFF'};
    public diaAtual: number = new Date().getDate();

    private MontarDiasMes(){
        let date = new Date();
        let ultimoDia = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
        
        for (let i=1; i <= ultimoDia; i++){
            this.arrayDiasMes.push(new Date(date.getFullYear(), date.getMonth(), i));
        }
    }

    public verificarEstilo(dia:Date){
        if(dia.getDate() === this.diaSelecionado)
            return this.classDiaSelecionado;
        if (dia.getDate() === new Date().getDate())
            return this.classDiaAatual;
    }
    
    public escolherNomeMes(){
        this.nomeMes = this.arrayNomeMes[new Date().getMonth()];
    }

    private verificarQualDiaSemanaDeveIniciarCalendario(){
        let diaSemana = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay();
        
        switch (diaSemana) {
            case 0:
                this.diaInitCalendar = 'init-calendar-dom';
                break;
            case 1:
                this.diaInitCalendar = 'init-calendar-seg';
                break;
            case 2:
                this.diaInitCalendar = 'init-calendar-ter';
                break;
            case 3:
                this.diaInitCalendar = 'init-calendar-qua';
                break;
            case 4:
                this.diaInitCalendar = 'init-calendar-qui';
                break;
            case 5:
                this.diaInitCalendar = 'init-calendar-sex';
                break;
            case 6:
                this.diaInitCalendar = 'init-calendar-sab'; 
                break;
            default:
                break;
        }
        
    }

    ngOnInit(): void {
        this.MontarDiasMes();
        this.escolherNomeMes();
        this.verificarQualDiaSemanaDeveIniciarCalendario();
    }
}
