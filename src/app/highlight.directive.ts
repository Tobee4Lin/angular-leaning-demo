import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }

  //appHighlight为绑定的指令，highlightColor为使用的别名
  @Input('appHighlight') highlightColor: string

  @HostListener("mouseenter") onMouseEnter () {
    this.highlight(this.highlightColor);
  }

  @HostListener("mouseleave") onMouseLeave () {
    this.highlight(null);
  }

  public highlight(color: string | Object) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
