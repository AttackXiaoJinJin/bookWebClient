/**
 * Created by Fox on 2017/9/5.
 */
import { Directive, ElementRef,HostListener, Input, OnInit } from '@angular/core';

@Directive({ selector: '[myStyleOther]' })
export class MyStyleDirective {
  constructor( private el: ElementRef) {
      this.el.nativeElement.className = 'dropdown';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.className = 'dropdown open';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.className = 'dropdown';
  }
}
