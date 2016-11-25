import { Component, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../db/hero.service';

@Component({
    selector: 'hero-list-icon',
    template: `
        <img [src]="hero.key | gallery:'hero':'lg'" class="hero-focus" [style.display]="focused">
        <img [src]="hero.key | gallery:'hero':'lg'" class="hero-img" >
    `,
    styles: [`
        :host {
            float: left;
            position: relative;
            margin: 4px;
            cursor: pointer;
        }
        .hero-img {
            z-index: 2;
            width: 100px;
            border-radius: 4px;
        }
        .hero-focus {
            top: -26px;
            left: -51px;
            position: absolute;
            z-index: 10;
            width: 205px;
            display: none;
            border: 1px solid white;
            border-radius: 4px;
            box-shadow: #777 1px 1px 3px;
        }
    `]
})
export class HeroListIconComponent {
    @Input() hero: Hero;
    @Output() heroFocused: EventEmitter<any> = new EventEmitter();
    focused: string = "none";

    @HostListener('mouseover') onmouseover() {
        this.focused = "block";
        this.heroFocused.emit(this.hero);
    }
    @HostListener('mouseout') onmouseout() {
        this.focused = "none";
        
    }
    @HostListener('click') onclick() {
        this.router.navigate(['/hero-detail', this.hero.id]);
    }

    constructor(private router: Router) { }
}