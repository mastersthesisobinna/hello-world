import { MyCoursesService } from './my-courses.service';

import { Component } from '@angular/core'

@Component({
    selector: 'courses',
    template: `
                <div> 
                    <h2>{{title}}</h2> 
                    <hr/> 
                    <p> {{ getTitle1() }} </p> 
                
                    <ul>
                        <li *ngFor="let course of coursesHardCoded">
                            {{course}}
                        </li>
                    </ul>                    

                    <p> {{ getTitle2() }} </p> 

                    <ul>
                        <li *ngFor="let course of coursesService">
                            {{course}}
                        </li>
                    </ul>
                </div>

                <button class="btn btn-primary" [class.disabled] = isDisabled>Class binding - Add class dynamically</button>
                <button [class]="addThisClass" [class.active] = isActive>Property Binding and Class binding</button>
                <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'pink'">Style Binding example</button>

                <div (click)="divClick()">
                <p>
                    Illustrating event bubbling issue. This is when an inner event raises
                    an outer event in the DOM. For example, clicking an inner button in a div
                    that is clickable, will force the inner button's event to raise the
                    outer div's event.

                    To stop this we need to use the $event.stopPropagation() method. 
                    So when the inner button in the div is clicked, it doesn't raised the 
                    event for the div.
                    As an illustration, click within the div area to raise its event.
                    Then click the button in the div to raise only the button event and not both
                    the button and div event.
                <p>
                    <button class="btn btn-primary" (click)="buttonClick($event)">Event Binding example</button>
                
                <h4>Getting text from input element using event argument</h4>
                <p>
                    Enter Text: <input (keydown.enter) = "onKeyPressedEvent($event)" (click)="stopPropagation($event)"/> press enter key when done to see entered text
                    <br/>
                    You entered: {{enteredText}}
                </p>
                
                <h4>Getting text from input element using variable argument</h4>
                <p>
                    Enter Text: <input #text (keydown.enter) = "onKeyPressedText(text.value)" (click)="stopPropagation($event)"/> press enter key when done to see entered text
                    <br/>
                    You entered: <span [textContent]="enteredText"></span>
                </p>


                
                <h4>Two Way Binding Example</h4>
                <p>
                    <input [(ngModel)]="resultText" (click)="stopPropagation($event)"/>
                    <br>
                    <span>{{resultText}}</span>
                </p>
                </div>
                `,
    styles: ['h2{color:blue} div{background-color: yellow}']
})
export class MyCourseComponent{
    isDisabled = true;
    isActive = true;
    enteredText;
    resultText;
    
    constructor(service: MyCoursesService){
        this.coursesService = service.getTitle();
    }

    stopPropagation = ($event) => {
        $event.stopPropagation();
    }

    buttonClick = ($event) => {
        $event.stopPropagation();
        alert("button was clicked");
    }

    divClick = () => {
        alert("div was clicked");
    }

    onKeyPressedEvent = ($event) => {
        this.enteredText = $event.target.value; //gets the value of text using the event
    }

    onKeyPressedText = (text) => {
        this.enteredText = text; //gets the value of text
    }

    addThisClass = "btn btn-primary";

    title = "Explicit Course component creation";

    getTitle1 = () => {
        return "Data provided via hard coding";
    }

    getTitle2 = () => {
        return "Data provided via service "
    }

    //data hard coded
    coursesHardCoded = ["English", "Maths", "Physics"];

    //data provided via service
    coursesService;

    
    
}