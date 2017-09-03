import { Component } from '@angular/core';

@Component({
    selector: 'angularContainer',
    template: `
        <div>
            <h3>
                Custom Elements: ngContent and ngContainer
            </h3>
            <ul>
                <li>
                    <strong>ngContent</strong>. used in your markup like this
                    '&lt;ng-content&gt;'. use this in a content component markup
                    that is hosted in another component's markup. This
                    is a data-passing technique from host's component html to
                    content's component html.
                </li>
                
                <li>
                    <strong>ngContainer</strong>. used in your markup like this
                    '&lt;ng-container&gt;'. use this in a host component markup
                    to render no element. think of this custom element as replacing
                    a div, span, p etc html element. So it's just a syntax sugar
                    to prevent rendering html elements. This is not use for data-transfer.
                    It's used instead to render only content of an element without its tag.
                    Inspect the content rendered and you'll see no html tag around it.
                </li>

                <li>
                    <strong>ngTemplate</strong>. used in your markup like this
                    '&lt;ng-template #templateVariableName&gt;'. This is a syntatic sugar like ngContainer.
                    You don't need to write div, span etc. you can use this. This is
                    not used for data transfer. It's used instead to show or hide elements.
                
                </li>
            </ul>

            <div class="panel panel-default">            
                <div class="panel-heading">
                    <ng-content select='.heading'></ng-content>
                </div>
                <div class="panel-body">
                    <ng-content select='.body'></ng-content>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
        `
    ]
})
export class AngularContainer{
    constructor(){}

}