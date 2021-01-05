
export class EstadoAtendimento {
    public nome: string;
    public dataNascimento: Date;
    public listaAtendimento: Array<Atendimento> = new Array<Atendimento>();
    public versao: number;
}