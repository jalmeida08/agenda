import { Atendimento } from './Atendimento';

export class EstadoAtendimento {
    public nome: string;
    public listaAtendimento: Array<Atendimento> = new Array<Atendimento>();
    public versao: number;
}