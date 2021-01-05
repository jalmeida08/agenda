import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';

@Injectable()
export class SampleGuard implements CanActivate {
    constructor( 
        private _router: Router,
        private _dataService: DataService ){  }
    canActivate() {
        console.log("-> ", this._router.url);
        console.log("-> ", window.location.pathname);
        if(this._dataService.verificarSessao())
            return true;
        else
            this._router.navigate(['login']);
    }
}