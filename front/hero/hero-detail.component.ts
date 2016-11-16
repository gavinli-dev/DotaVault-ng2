import { Component, OnInit }                from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { Hero, HeroService}             from '../../db/hero.service';
import { RatingComponent }              from '../../shared/rating.component';

@Component({
    selector: 'hero-detail',
    templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
    heroId: string;
    hero: Hero;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private heroService: HeroService
    ) { }

    // isSelected(hero: Hero) {
    //     return hero.id === this.selectedId;
    // }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.heroId = params['id'];
        });
        this.heroService.getHeroById(this.heroId).subscribe(
            h => {this.hero = h, console.log(h)}
        );
    }
}