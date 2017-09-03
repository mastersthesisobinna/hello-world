import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
  favoritePresetValue: boolean = true; //we will use this value to alter the favorite selector's attribute/property- isFavorite 

  returnEventData = (object) =>{
    alert(object);
  }

  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChanged = (isFavoriteOutData) => {
    alert("Change Event Raised- isFavorite is now "+isFavoriteOutData);
  }
}
