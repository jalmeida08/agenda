import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routing } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SampleGuard } from './_data/SampleGuard';
import { DataService } from './services/data.service';
import { Interceptor } from './_data/Interceptor.interceptor';
import { AlertaModule } from '../app/_diretiva/alerta/alerta.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AreaPublicaModule } from "../app/area-publica/area-publica.module";
import { AreaPrivadaModule } from './area-privada/area-privada.module';
import { CalendarioModule } from './_diretiva/calendario/calendario.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,

    routing,
    Interceptor,
    AlertaModule,
    CalendarioModule,

    AreaPublicaModule,
    AreaPrivadaModule,
  ],
  providers: [
    DataService,
    SampleGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
