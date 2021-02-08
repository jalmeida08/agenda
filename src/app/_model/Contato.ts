import { Pessoa } from "./Pessoa";
import { Telefone } from "./Telefone";

export class Contato {
    public id: number;
    public telefone: Array<Telefone> = new Array<Telefone>();
}