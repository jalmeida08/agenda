export class Procedimento {
    
    public id: number;
    public nome: string;
    public valor: number;
    public versao: number;
    public procedimento: Array<Procedimento> = new Array<Procedimento>();

}