import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'reuseComponent',
  templateUrl: './demo-reusable-component.component.html',
  styleUrls: ['./demo-reusable-component.component.css']
})
export class DemoReusableComponentComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  @Input("is-favorite") isFavorite:boolean = true;
  @Output("change") change = new EventEmitter(); //raise a custom output event using an actual html event like click

  stopEventHoisting = ($event) => {
    $event.stopPropagation();
  }

  //method handler is called when a html click event is raised and can be used to raise custom events
  changeStarIcon = ($event) => {
    this.stopEventHoisting($event);
    this.isFavorite = !this.isFavorite;

    /*
      ::Custom event called change raised when method handler of a click event is called.
      
      ::Passing data when change event is raised (output property)
      Same as saying this.change.emit($event); 
      where $event is this.isFavorite
    */
    this.change.emit(this.isFavorite); 
  }

}
