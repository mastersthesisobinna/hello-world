import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  private el: ElementRef; //access DOM element value this.el.nativeElement.value
  @Input('format') format: string;  

  constructor(el:ElementRef) { 
    this.el = el;
  }

  /*
    The @HostListener handles event triggered from UI by calling native event.
    For example the native event method blur, is triggered when a user lose focus from
    an HTML input text box. The handler for this event is the method onBlur
  */
  @HostListener('blur') onBlur = () => {    
    switch(this.format){
      case 'USA': this.phoneFormatUSA();
                  break;                  
      case 'NGN': this.phoneFormatNigeria();
                  break;
      default: this.noPhoneFormat();
                  break;
    } 
  }

  phoneFormatUSA = () => {
    //access DOM element value this.el.nativeElement.value
    let DomValue: string = this.el.nativeElement.value; 

    if(DomValue.length == 10){
      //USA number format
      let areaCode: string = DomValue.substring(0, 3); //first three digits
      let prefix: string = DomValue.substring(3, 6); //next three digits
      let line: string = DomValue.substring(6, 10); //last four digits

      //format number: USA
      this.el.nativeElement.value = "(" +areaCode+ ")" +prefix+ "-" +line;
    }
  }

  phoneFormatNigeria = () => {
    //access DOM element value this.el.nativeElement.value
    let DomValue: string = this.el.nativeElement.value; 

    if(DomValue.length == 11){
      //USA number format
      let areaCode: string = DomValue.substring(1, 4); //first three digits
      let prefix: string = DomValue.substring(4, 7); //next three digits
      let line: string = DomValue.substring(7, 11); //last four digits

      //format number: USA
      this.el.nativeElement.value = "+234-" +areaCode+ "-" +prefix+ "-" +line;
    }
  }

  noPhoneFormat = () => {
    let DomValue: string = this.el.nativeElement.value;
    this.el.nativeElement.value = DomValue;
  }
}
