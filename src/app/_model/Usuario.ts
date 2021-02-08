import { Pessoa } from "./Pessoa";
import { Acesso } from "./Acesso";

export class Usuario {
    public id: number;
    public email: string;
    public pessoa: Pessoa = new Pessoa();
    public usuario: string;
    public senha: string;
    public token: string;
    public acesso:Array<Acesso> = new Array<Acesso>();
    public ultimoLogin: Date;
    public chaveAtivacao: string;
    public ativo: boolean;

};