import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'shadow',
    template: `
        <h3>
            05 Building Re-usable Components - ViewEncapsulation / Shadow DOM
        </h3>
        <button class="btn btn-primary">SHADOW</button>
    `,
    styles: [
        `
            button{
                background-color: red;
                color: yellow;
                font-weight: bolder;
            }

            button:hover{
                background-color: yellow;
                color: red;       
                font-weight: bolder;     
            }
        `
    ],
    encapsulation: ViewEncapsulation.Emulated
})
export class ShadowDOMComponent{
    constructor (){}


}