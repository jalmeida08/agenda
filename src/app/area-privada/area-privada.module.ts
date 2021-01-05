import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaPrivadaService } from './area-privada.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CadastrarProcedimentoComponent } from './procedimento/cadastrar/cadastrar-procedimento.component';
import { CadastrarAtendimentoComponent } from './atendimento/cadastrar/cadastrar-atendimento.component'; 

@NgModule({
    declarations: [
        CadastrarProcedimentoComponent,
        CadastrarAtendimentoComponent
    ],
    imports: [ 
        CommonModule,
        BrowserModule,
        FormsModule
    ],
    exports: [
        CadastrarProcedimentoComponent,
        CadastrarAtendimentoComponent,
    ],
    providers: [
        AreaPrivadaService
    ],
})
export class AreaPrivadaModule {}