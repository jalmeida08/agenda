import { Component, OnInit, Input} from '@angular/core';
import { Alerta } from './alerta';

@Component({
    selector: 'app-alerta',
    templateUrl: 'alerta.component.html'
})

export class AlertaComponent implements OnInit {

    @Input() alertas: Array<Alerta> = new Array<Alerta>();

    constructor() {}
    
    public closeAlert(alert: Alerta) {
        const index: number = this.alertas.indexOf(alert);
        this.alertas.splice(index, 1);
    }

    ngOnInit(): void { }
}
