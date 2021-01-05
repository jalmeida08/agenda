import { Injectable } from '@angular/core';
import { Usuario } from '../_model/Usuario';
import { Alerta } from '../_diretiva/alerta/alerta';
import { Router } from '@angular/router';

@Injectable()
export class DataService {    

    public alertas: Array<Alerta> = new Array<Alerta>();

    constructor(private _router: Router) {}

    public verificarSessao(): boolean{
        let usrAgPollyStudio   = localStorage.getItem('usrAgPollyStudio');
        let tkAgPollyStudio    = localStorage.getItem('tkAgPollyStudio');
        let usrIdAgPollyStudio = localStorage.getItem('usrIdAgPollyStudio');
        
        
        if(!usrAgPollyStudio || !tkAgPollyStudio || !usrIdAgPollyStudio )
            return false;
        else
            return true;
    }

    public registrarSessao(usuario: Usuario): void {
        localStorage.setItem('usrIdAgPollyStudio', usuario.id.toString());
        localStorage.setItem('usrAgPollyStudio', usuario.usuario);
        localStorage.setItem('tkAgPollyStudio', usuario.token);
    }
    
    public montarTokenSessao(): string{
        let tokenSessao:string = localStorage.getItem('tkAgPollyStudio');
        let idUsuarioSessao:string =  localStorage.getItem('usrIdAgPollyStudio');
        if(tokenSessao && idUsuarioSessao)
            return tokenSessao.concat("#").concat(idUsuarioSessao); 
        return "";

    }

    public limparSessao(): void {
        localStorage.clear();
    }
    
    public urlLivreAutenticacao(url: string){
        let listaUrl:Array<String> = Array<String>("administracao/usuario");
        
    }
    
	// RESPONSAVEL POR DISPARAR AS MENSAGENS NA TELA
	public alerta(
		mensagem: string,
		tipoMensagem: string,
		mensagemDestaque: string): Array<Alerta> {
		this.alertas.push(
			{
				mensagem: mensagem,
				tipoMensagem: tipoMensagem,
				mensagemDestaque: mensagemDestaque
			}
        );
        return this.alertas;
    }
     
    public limparMensagens(): Array<Alerta>{
        console.info('Limpando');
        
        this.alertas = new Array<Alerta>();
        return this.alertas;
    }

}