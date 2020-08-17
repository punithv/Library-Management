import { Injectable } from '@angular/core';
import { Router, CanActivate ,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { AuthserviceService} from './authservice.service';
import { Observable} from 'rxjs';


export class AuthGurd implements CanActivate {
    constructor( private authservice:AuthserviceService, private router:Router){}

    canActivate(router:ActivatedRouteSnapshot , state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return true;


        
            

    }
}