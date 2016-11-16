import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { Hero, HeroService }        from '../../db/hero.service';

@Component({
    template: `
        <div>
            <a routerLink="/hero/create">Create Hero Profile</a>
        </div>
        <table>
            <thead>
                <tr>

                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let hero of heroes" (click)="onEditHero(hero)">
                    <td><img [src]="hero.key | gallery:'hero':'sm'" /></td>
                    <td>{{hero.name}}</td>
                </tr>
            </tbody>
        </table>
    `,
    styles: [`
        tr {cursor: pointer;}
    `]
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

    ngOnInit(): void {

        console.log("hero list init function run!!!");

        this.heroService.getHeroes().subscribe(
            heroes => this.heroes = heroes,
            errors => this.errMsg = errors
        );
    }
}