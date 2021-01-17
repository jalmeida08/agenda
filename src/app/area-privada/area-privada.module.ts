import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaPrivadaService } from './area-privada.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CadastrarProcedimentoComponent } from './procedimento/cadastrar/cadastrar-procedimento.component';
import { CadastrarAtendimentoComponent } from './atendimento/cadastrar/cadastrar-atendimento.component'; 
import { CadastrarClienteComponent } from './cliente/cadastrar/cadastrar-cliente.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CalendarioModule } from '../_diretiva/calendario/calendario.module';
import { CalendarioHomeModule } from '../_diretiva/home-calendario/calendario-home.module';
import { BuscarClienteComponent } from './cliente/modal-buscar-cliente/buscar-cliente.component';

@NgModule({
    declarations: [
        CadastrarProcedimentoComponent,
        CadastrarAtendimentoComponent,
        CadastrarClienteComponent,
        HomePageComponent,
        BuscarClienteComponent,
    ],
    imports: [ 
        CommonModule,
        BrowserModule,
        FormsModule,
        CalendarioModule,
        CalendarioHomeModule,
    ],
    exports: [
        CadastrarProcedimentoComponent,
        CadastrarAtendimentoComponent,
        CadastrarClienteComponent,
        HomePageComponent,
        BuscarClienteComponent,
    ],
    providers: [
        AreaPrivadaService
    ],
})
export class AreaPrivadaModule {}