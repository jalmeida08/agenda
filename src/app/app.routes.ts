import { Routes, RouterModule } from '@angular/router';
import { CadastrarAtendimentoComponent } from './area-privada/atendimento/cadastrar/cadastrar-atendimento.component';
import { CadastrarProcedimentoComponent } from './area-privada/procedimento/cadastrar/cadastrar-procedimento.component';
import { LoginComponent } from './area-publica/login/login.component';
import { CadastroComponent } from './area-publica/usuario/cadastro/cadastro-compoent';
import { FinalizarCadastroComponent } from './area-publica/usuario/finalizar-cadastro/finalizar-cadastro.component';
import { SampleGuard } from './_data/SampleGuard';

const appRoutes: Routes = [
    
    // AREA PUBLICA
    { path: 'login', component: LoginComponent },
    
    // AREA LOGADA / ADMINISTRATIVA
    { path: 'novo-usuario', component: CadastroComponent },
    { path: 'habilitar-cadastro-usuario/:chave_ativacao', component: FinalizarCadastroComponent },
    { path: 'procedimento/novo', component: CadastrarProcedimentoComponent, canActivate: [SampleGuard] },
    
    // AREA LOGADA / COMUM
    { path: 'atendimento/novo', component: CadastrarAtendimentoComponent, canActivate: [SampleGuard] },
    
    { path: '**', redirectTo: 'login' },
];

export const routing = RouterModule.forRoot(appRoutes);
