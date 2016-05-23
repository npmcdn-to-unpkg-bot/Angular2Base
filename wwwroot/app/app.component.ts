import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';

import { HomeComponent } from './components/home.component'
import { DetailComponent } from './components/detail.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/html/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})

@Routes([
    { path: '/home', component: HomeComponent },
    { path: '/detail/:id', component: DetailComponent },
    { path: '/', name: 'Base', component: HomeComponent },
    { path: '*', name: 'Default',component: HomeComponent }
])

export class AppComponent implements OnInit {
    title = 'Angular 2 Starter';

    constructor(private router: Router){
        
    }
    
    public activeRoute(path: string): boolean {
        return this.router.urlTree.contains(this.router.createUrlTree([path]));
    }
    
    private OnInit(){
        
    }
}