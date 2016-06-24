import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'detail',
    templateUrl: 'app/html/detail.component.html'
})
export class DetailComponent implements OnInit, OnDestroy {
    public id: number;
    constructor() { }
}