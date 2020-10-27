import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {

  @Input() style: number;

  constructor(private elm: ElementRef) {
  }
  @HostListener('mouseenter') onMouseEnter(): void {
    this.changeStyle('underline', 'bold');
  }
  @HostListener('mouseleave') onMouseLeave(): void {
    this.changeStyle('', '');
  }
  changeStyle(textDecor: string, fontWeight: string): void {
    switch (this.style) {
      case 0:
        this.elm.nativeElement.style.textDecoration = textDecor;
        break;
      case 1:
        this.elm.nativeElement.style.fontWeight = fontWeight;
    }
  }
}
