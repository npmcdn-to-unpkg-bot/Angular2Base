import { Component, OnInit } from '@angular/core';
import { OnActivate, Router, RouteSegment } from '@angular/router'

@Component({
    selector: 'detail',
    templateUrl: 'app/html/detail.component.html'
})
export class DetailComponent implements OnInit, OnActivate {
    public id: number;

    constructor() { }

    routerOnActivate(curr: RouteSegment): void {
        this.id = +curr.getParam('id');
    }

    ngOnInit() { }
}