import { Directive, ElementRef, Output, EventEmitter, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[infiniteScroll]'
})
export class InfiniteScrollDirective {
    @Input() public infiniteScrollDistance: number = 0;
    @Output() public infiniteScroll: EventEmitter<void>;

    private scrollWasHit: boolean = false;

    constructor(private elemRef: ElementRef) {
        this.infiniteScroll = new EventEmitter<void>();
    }

    @HostListener('scroll', ['$event'])
    public onScroll(evt) {
        const scrollContainerElem: HTMLElement = evt.target;
        if (scrollContainerElem !== this.elemRef.nativeElement) {
            return;
        }

        if (scrollContainerElem.scrollTop + scrollContainerElem.clientHeight + this.infiniteScrollDistance >=
            scrollContainerElem.scrollHeight) {
            // hit only once when entering the distance area from bottom
            // (avoid emitting the handler while scrolling in the bottom area)
            if (!this.scrollWasHit) {
                this.infiniteScroll.emit();
                this.scrollWasHit = true;
            }
        } else if (this.scrollWasHit) {
            this.scrollWasHit = false;
        }
    }
}
