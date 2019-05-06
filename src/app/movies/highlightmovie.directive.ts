import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlightmovie]'
})
export class HighlightmovieDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2 ) {
  }

  @HostListener('mouseover') onMouseOver() {
    this.renderer.addClass(this.elRef.nativeElement,'movie-high');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.elRef.nativeElement,'movie-high');
  }
}
