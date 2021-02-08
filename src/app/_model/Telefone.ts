import { Contato } from "./Contato";

export class Telefone{
    public id: number;
    public ddd: string;
    public numero: number;
    public contato: Contato = new Contato();
}