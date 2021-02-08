import { Contato } from "./Contato";
import { Usuario } from "./Usuario";

export class Pessoa {
    public id: number;
    public usuario: Usuario;
    public nome: string = '';
    public contato: Contato = new Contato();
    public dataNascimento: Date;
}