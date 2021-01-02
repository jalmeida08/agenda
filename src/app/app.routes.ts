import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './area-publica/login/login.component';
import { CadastroComponent } from './area-publica/usuario/cadastro/cadastro-compoent';
import { FinalizarCadastroComponent } from './area-publica/usuario/finalizar-cadastro/finalizar-cadastro.component';

const appRoutes: Routes = [
    // AREA PUBLICA
    { path: 'novo-usuario', component: CadastroComponent},
    { path: 'habilitar-cadastro-usuario/:chave_ativacao', component: FinalizarCadastroComponent },
    { path: 'login', component: LoginComponent },

    // AREA LOGADA

    { path: '**', redirectTo: 'login' },
];

export const routing = RouterModule.forRoot(appRoutes);
