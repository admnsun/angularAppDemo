import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'test',
    template: require('./test.component.html'),
    styles: [require('./test.component.css')]
})

export class TestComponent implements OnInit{
    constructor(){

    }
    ngOnInit(){}
}