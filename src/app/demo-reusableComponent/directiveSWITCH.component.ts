import { Component } from '@angular/core';

@Component({
    selector: 'directiveSwitch',
    template: `
        <h1>06 Directives: ngSwitchCase</h1>
        <p>
            The ngSwitchCase directive is another structural directive hiding/showing elements. It does the same thing as hidden property
            It's used a bit differently than ngIf. First it requires a property binding,
            which actually is written as [ngSwitch] and holds the value to select a given
            switchCase.
            This is similar like in Java 
            <br/>
            switch(value) same as [ngSwitch]="value"<br/>
            case A: statement; same as *ngSwitchCase="value or expression"<br/>
            default: statement; same as *ngSwitchDefault="value or expression"<br/>
            The *ngSwitch directive (case or default) will be used depending on the
            evaluation of an expression that matches the [ngSwitch] value.
        </p>

        <h4>Basic Usage</h4>
        <div [ngSwitch]="value">
            <div *ngSwitchCase="'map'">
                Showing map details
            </div>
            <div *ngSwitchCase="'list'">
                Showing list details
            </div>
            <div *ngSwitchDefault>
                Showing other details
            </div>
        </div>

        <h4>Complex real-world Usage</h4>
        <ul class="nav nav-pills">
            <li [class.active]="value=='map'"><a (click)="value='map'">Map</a></li>
            <li [class.active]="value=='list'"><a (click)="value='list'">List</a></li>
            <li [class.active]="value=='others'"><a (click)="value='others'">Something Else</a></li>
        </ul>
        <div [ngSwitch]="value">
            <div *ngSwitchCase="'map'">
                Map details
            </div>
            <div *ngSwitchCase="'list'">
                List details
            </div>
            <div *ngSwitchDefault>
                Other details
            </div>
        </div>
    `,
    styles: [``]
})
export class DirectiveSwitch{
    constructor(){}
    value = 'map';
}