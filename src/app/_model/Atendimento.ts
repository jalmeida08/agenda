import { Contato } from "./Contato";
import { EstadoAtendimento } from "./EstadoAtendimento";
import { Pessoa } from './Pessoa';
import { Procedimento } from "./Procedimento";

export class Atendimento {
    public id: number;
    public estadoAtendimento: EstadoAtendimento = new EstadoAtendimento();
    public valorTotal: number;
    public desconto: number;
    public dataAtendimento: Date;
    public dataAgendamento: Date;
    public contato: Contato = new Contato();
    public versao: number;
    public pessoa: Array<Pessoa> = new Array<Pessoa>();
    public procedimento: Array<Procedimento> = new Array<Procedimento>();
}