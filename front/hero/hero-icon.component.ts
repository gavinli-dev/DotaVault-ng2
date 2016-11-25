import { Component, Input, HostListener }   from '@angular/core';
import { Router }                           from '@angular/router';

import { Hero }             from '../../db/hero.service';
import { RatingComponent }  from '../../shared/rating.component';


@Component({
    selector: 'hero-icon',
    styleUrls: ['hero-icon.component.css'],
    templateUrl: './hero-icon.component.html',
    // template: `
    //     <div>{{hero.name}}</div>
    //     <div><img [src]="hero.key | gallery:'hero':'full'" /></div>
    // ` 
})

export class HeroIconComponent {
    @Input() hero: Hero;
    
    constructor(
        private router: Router
    ) { }

    @HostListener('click') onclick() {
        this.router.navigate(['/hero-detail', this.hero.id])
    }
}