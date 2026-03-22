import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input() revealDelay = 0;

  private observer?: IntersectionObserver;

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    const nativeElement = this.el.nativeElement;

    this.renderer.addClass(nativeElement, 'reveal-ready');
    this.renderer.setStyle(nativeElement, 'transition-delay', `${this.revealDelay}ms`);

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        this.renderer.addClass(nativeElement, 'reveal-active');
        this.observer?.disconnect();
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.12
      }
    );

    this.observer.observe(nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}