import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private _text:string = `
          Umbrellas and parasols are primarily hand-held portable 
          devices sized for personal use. The word 'umbrella' 
          typically refers to a device used for protection from rain. 
          Umbrella canopies may be made of fabric or flexible plastic.`;

  private _age:number = 10;

  private _name:string = "obinna";

  private _worth:number = 100000;

  get Text(){
    return this._text;
  }

  get Age(){
    return this._age;
  }

  get Name(){
    return this._name;
  }

  get Worth(){
    return this._worth;
  }

  summarize: boolean = true;

  unSummarizeText = () => {    
    this.summarize = !this.summarize;    
  }

}
