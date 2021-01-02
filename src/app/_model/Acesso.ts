import { Pessoa } from "./Pessoa";
import { Usuario } from "./Usuario";

export class Acesso{
    public id: number;
    public descricao: string;
    public usuario:Array<Usuario> = new Array<Usuario>();
    public acesso: string;
    public ativo: boolean;
}