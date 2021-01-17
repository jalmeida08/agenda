import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { CalendarioComponent } from './calendario.component';

@NgModule({
    declarations: [ CalendarioComponent ],
    imports: [BrowserModule],
    exports: [ CalendarioComponent ],
    providers: [],
})
export class CalendarioModule {}