import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDisplaymovies]'
})
export class DisplaymoviesDirective implements OnInit {

  constructor(private templateRef: TemplateRef <any>, private vwRef: ViewContainerRef) { }

  @Input() set appDisplaymovies(condition: boolean) {
    if (condition) {
      this.vwRef.createEmbeddedView(this.templateRef);
    } else {
      this.vwRef.clear();
    }
  }
    ngOnInit(): void {
  }

}
