import { Directive, ElementRef, Input, OnInit, HostListener, Host } from '@angular/core';

@Directive({
  selector: '[appSimple]'
})
export class SimpleDirective implements OnInit {
  @Input() foreColor: string;
  @Input() bgColor: string;
  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.color = this.foreColor;
    this.el.nativeElement.style.backgroundColor = this.bgColor;
  }
  constructor(private el: ElementRef) {} 
  @HostListener('mouseleave') onmouseleave(){
    this.el.nativeElement.style.color =  null;
    this.el.nativeElement.style.backgroundColor = null;
  }
  ngOnInit(){}
}
