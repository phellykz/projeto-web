
import { Endereco } from "app/etidades/endereco";

export class Voluntario {
    
    endereco = new Endereco();
    

    tipo:string;
    nome: string;
    idiomas:string;
    interesse:string;
    telefone:number;
    sobre:string;
    email:string;
    senha:string;
}
