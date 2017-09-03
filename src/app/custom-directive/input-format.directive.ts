import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  private el: ElementRef;
  @Input('format') format: string;  

  constructor(el:ElementRef) { 
    this.el = el;
  }

  //Consider this @HostListener has output same as @Output but used differently
  @HostListener('blur') onBlur = () => {
    /*
      With the @HostListener('blur'), when the user types in textbox and moves
      focus outside, the number entered will be formatted. In this example we 
      are using a custom directive to format a USA phone number.
    */

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
