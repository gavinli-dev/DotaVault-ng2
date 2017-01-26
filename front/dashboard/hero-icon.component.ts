import { Component, OnInit, Input, HostListener }   from '@angular/core';
import { Router }                           from '@angular/router';

import { Hero }             from '../../db/hero.service';
import { RatingComponent }  from '../../shared/rating.component';

@Component({
    selector: 'hero-icon',
    styleUrls: ['hero-icon.component.css'],
    templateUrl: './hero-icon.component.html'
})

export class HeroIconComponent implements OnInit{
    roleKeys: string[] = new Array<string>();
    @Input() hero: Hero;
    
    constructor(
        private router: Router
    ) { }

    @HostListener('click')
    onclick() {
        this.router.navigate(['/hero-detail', this.hero.id])
    }

    ngOnInit() {
        let roleObj = this.hero.role;
        for(let k in roleObj) {
            if(roleObj[k] > 0) {
                let s = k.replace( /([A-Z])/g, " $1" );
                let result = s.charAt(0).toUpperCase() + s.slice(1);
                this.roleKeys.push(result);
            }
        }
    }
}