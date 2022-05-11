import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxLet]'
})
export class NgxLetDirective<T = unknown> {
  private _context: LetContext<T>;

  constructor(private template: TemplateRef<LetContext<T>>, private viewContainer: ViewContainerRef) {}

  @Input()
  set ngxLet(value: T) {
    if (!this.template) {
      return;
    }
    this._context = { $implicit: value, ngxLet: value };
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.template, this._context);
  }
}

export interface LetContext<T> {
  $implicit: T;
  ngxLet: T;
}
