import { Directive, ElementRef, inject, input } from "@angular/core";
import { LogDirective } from "./log.directive";


@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    },
    hostDirectives: [LogDirective]
})

export class SafeLinkDirective {
    queryParam = input('myapp',{alias: 'appSafeLink'});
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);


    constructor() {

    }
    onConfirmLeavePage(event: MouseEvent) {
        const wantsToLeave = window.confirm('Do you want to Leave');
        if (wantsToLeave) {
            // const address = (event.target as HTMLAnchorElement).href;
            const address = this.hostElementRef.nativeElement.href;
            // (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
            this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParam();
            return;
        }
        event?.preventDefault();
    }
}