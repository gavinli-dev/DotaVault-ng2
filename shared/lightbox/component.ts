import { Component, HostBinding, Input, ElementRef, 
    animate, state, transition, trigger, style
} from '@angular/core';

@Component({
    selector: 'lightbox',
    templateUrl: './component.html',
    styleUrls: ['./component.css'],
    animations: [
        trigger('contentAnim', [
            state('on', style({
                top: '50%',
                opacity: 1
            })),
            state('off', style({
                top: '48%',
                opacity: 0.2
            })),
            transition('off <=> on', animate('.2s'))
        ]),
        trigger('maskAnim', [
            state('on', style({
                opacity: 0.9
            })),
            state('off', style({
                opacity: 0.2
            })),
            transition('off <=> on', animate('.2s'))
        ])
    ]
})
export class LightboxComponent {
    state: string = 'off';
    @Input('title') title: string;

    // @HostBinding("@maskAnim") get maskState() {
    //     return this.state;// == "on" ? false : true;
    // }

    constructor(private el: ElementRef) {

    }

    show() : void {
        this.state = "on";
    }

    hide(): void {
        this.state = "off";
    }

    animStarted(event: any) {
        if(event.toState == "on") {
            this.el.nativeElement.style.display = "block";
        }
    }

    animEnded(event: any) {
        if(event.toState == "off") {
            this.el.nativeElement.style.display = "none";
        }
    }

    onClose() {
        this.state = "off";
    }
}