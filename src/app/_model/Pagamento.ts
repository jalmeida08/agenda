import { Pessoa } from "./Pessoa";

export class Pagamento {
    
    public id: number;
    public pessoa: Pessoa;
    public titulo: string;
    public descricao: string;
    public dataReferencia: Date;
    public valor: number;
    public ativo: boolean;
}