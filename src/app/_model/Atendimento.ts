import { EstadoAtendimento } from "./EstadoAtendimento";
import { Pessoa } from './Pessoa';

export class Atendimento {
    public id: number;
    public estadoAtendimento: EstadoAtendimento = new EstadoAtendimento();
    public valorTotal: number;
    public esconto: number;
    public dataAtendimento: Date;
    public dataAgendamento: Date;
    public versao: number;
    public pessoa: Array<Pessoa> = new Array<Pessoa>();
}