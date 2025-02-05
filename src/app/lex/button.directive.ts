import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true
})
export class ButtonDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = 'black';
    this.elementRef.nativeElement.style.color = 'white';
    this.elementRef.nativeElement.style.fontFamily = 'cursive';
    this.elementRef.nativeElement.style.width = '100px';
    this.elementRef.nativeElement.style.height = '30px';
  }

}
