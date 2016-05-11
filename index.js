import { Directive, ElementRef } from '@angular/core';

import 'font-awesome/css/font-awesome.min.css';

@Directive({
  selector: '[fa]',
  inputs: ['icon', 'size', 'fw', 'spin', 'pulse', 'rotate', 'flip', 'extra']
})
export class FontAwesomeDirective {
  static get parameters() {
    return [[ElementRef]];
  }

  constructor(elementRef) {
    this.el = elementRef.nativeElement;
  }

  ngOnChanges() {
    this.el.className = '';
    this.el.classList.add(...this.iconClass());
  }

  iconClass() {
    const classes = ['fa', `fa-${this.icon}`];
    if(this.fw)     classes.push('fa-fw');
    if(this.size)   classes.push(`fa-${this.size}`);
    if(this.spin)   classes.push('fa-spin');
    if(this.pulse)  classes.push('fa-pulse');
    if(this.rotate) classes.push(`fa-rotate-${this.rotate}`);
    if(this.flip)   classes.push(`fa-flip-${this.flip}`);
    if(this.extra)  classes.push(this.extra);
    return classes;
  }
}
