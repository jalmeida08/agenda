import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CadastroComponent } from './usuario/cadastro/cadastro-compoent';
import { AreaPublicaService } from './area-publica-service';
import { FinalizarCadastroComponent } from './usuario/finalizar-cadastro/finalizar-cadastro.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        CadastroComponent,
        FinalizarCadastroComponent,
        LoginComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
    ],
    exports: [
        CadastroComponent,
        FinalizarCadastroComponent,
        LoginComponent,
    ],
    providers: [
        AreaPublicaService,
    ],
})
export class AreaPublicaModule {}