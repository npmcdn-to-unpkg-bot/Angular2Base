import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ROUTER_DIRECTIVES } from '@angular/router';

import { HomeComponent } from './components/home.component'
import { DetailComponent } from './components/detail.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/html/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent implements OnInit {
    title = 'Angular 2 Starter';

    constructor(private route: ActivatedRoute, private router: Router){
        
    }
    
    public activeRoute(path: string): boolean {
        return false;// this.route.snapshot.url.contains(path);
    }
    
    private OnInit(){
        
    }
}