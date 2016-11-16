import { Component, OnInit }    from '@angular/core';

import { Hero, HeroService }    from '../../db/hero.service';
import { RatingComponent }      from '../../shared/rating.component';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    heroes: Hero[];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHotHeroes().subscribe(
            heroes => this.heroes = heroes
        );
    }
}