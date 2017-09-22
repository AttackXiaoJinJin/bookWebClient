/**
 * Created by Fox on 2017/9/5.
 */
import { Directive, ElementRef,HostListener, Input, OnInit } from '@angular/core';

@Directive({ selector: '[searchstyle]' })
export class SearchStyleDirective{
  @Input('searchstyle')styleColor:string;
  constructor( private el: ElementRef) {
      // this.el.nativeElement.className = 'dropdown';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.setColor(this.styleColor||'rgb(211,211,211)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor('white');
  }
  private setColor(color:string){
    this.el.nativeElement.style.backgroundColor=color;

  }
}
