import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { Hero, HeroService }        from '../../db/hero.service';

@Component({
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
    heroes: Hero[];
    errMsg: any;
    heroService: HeroService;

    constructor(
        private hs: HeroService,
        private router: Router
        ) {
        this.heroService = hs;
    }

    onEditHero(hero: Hero) {
        this.router.navigate(['hero/edit', hero.id]);
    }

    enumFaction(index: number) {
        switch(index) {
            case 0:
            return "radiant";
        default:
            return "dire";
        }
    }

    ngOnInit(): void {

        console.log("hero list init function run!!!");

        this.heroService.getHeroes().subscribe(
            heroes => this.heroes = heroes,
            errors => this.errMsg = errors
        );
    }
}