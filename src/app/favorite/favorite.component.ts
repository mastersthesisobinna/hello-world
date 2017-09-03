import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('aliasIsFavorite') isFavorite: boolean; //@Input forces the field to serve as a custom attribute for the favorite selector
  @Output() change = new EventEmitter; //@Output forces the field to serve as a custom event attribute for the favorite selector

  onClick = () =>{
    this.isFavorite = !this.isFavorite; //value of isFavorite changes from true to false and vice versa when onClick method is called
    this.change.emit(this.isFavorite); //this event with accompaning data is called when you click the start icon.
  }

}
