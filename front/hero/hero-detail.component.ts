import { Component, OnInit }                from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { Hero, HeroService}             from '../../db/hero.service';
import { RatingComponent }              from '../../shared/rating.component';

@Component({
    selector: 'hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: [
        'hero-detail.component.css'
    ]
})
export class HeroDetailComponent implements OnInit {
    heroId: string;
    hero: Hero;

    paClass: string;
    paText: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private heroService: HeroService
    ) { }

    isRadiant(): boolean {
        return parseInt(this.hero.faction) == 0;
    }

    isDire(): boolean {
        return parseInt(this.hero.faction) == 1;
    }

    onBackToList() {
        this.router.navigate(['/heroes']);
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.heroId = params['id'];
        });
        this.heroService.getHeroById(this.heroId).subscribe(h => {
            this.hero = h;
            let paCode = parseInt(this.hero.primaryAttribute);
            switch(paCode) {
                case 0:
                    this.paText = "Agility";
                    break;
                case 1:
                    this.paText = "Intelligence";
                    break;
                case 2:
                    this.paText = "Strenth";
                    break;

            }
        });
    }
}