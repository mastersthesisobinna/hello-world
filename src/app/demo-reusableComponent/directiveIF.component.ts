import { Component } from '@angular/core';

@Component({
    selector: 'directiveIF',
    template: `
        <h1>06 Directives: ngIf</h1>
        <p>
            There are <strong>two types of Directives</strong>. 
            <br/>
            1. Attribute Directive, which modifies the attribute of DOM elements.
            <br/>
            2. Structural Directive, which modifies the structure of DOM elements.
            <br/>
            In a way the structural directives can be considered animative.
            All structural directives should be prefixed with an asterix (*)
            The <strong>'ng-if'</strong> directive is a structural directive that 
            can be used for showing/hiding elements. Although not required, it's
            best used together with the custom element called ng-template.
            Note that the hidden attribute can be used as a property to bind a truthy
            statement, which can behave in the same way as ngIf for showing or hiding
            DOM elements. Though, unlike ngIf, using hidden property will hide the 
            element from rendering, but it is still in the DOM. ngIf removes the element
            from rendering in the browser and also removes it from the DOM. Inspect to see.
        </p>

        <h4>Method 1: using div tags only</h4>
        <div *ngIf='courses.length > 0'>
            Total number of courses available: {{courses.length}}
        </div>
        <div *ngIf='courses.length == 0'>
            Total number of courses available: {{courses.length}}
        </div>

        <h4>
            Method 2: using if/else condition in div and custom element, ng-template
        </h4>
        <div *ngIf='courses.length > 0 else elseBlock'>
            Total number of courses available: {{courses.length}}
        </div>
        <ng-template #elseBlock>
            Total number of courses available: {{courses.length}}
        </ng-template>

        <h4>
            Method 3: using if/else condition in div and 
            multiple custom element, ng-template
        </h4>
        <div *ngIf='courses.length > 0; then ifBlock1 else elseBlock2'></div>
        <ng-template #ifBlock1>
            Total number of courses available: {{courses.length}}
        </ng-template>
        <ng-template #elseBlock2>
            Total number of courses available: {{courses.length}}
        </ng-template>
    `,
    styles: [``]
})
export class DirectiveIF{
    constructor(){}

    courses = ['ENG','MAT','PHY'];
}