import { Component, Output, EventEmitter, OnInit }  from '@angular/core';
import { Ability, AbilityService }          from '../../db/ability.service';

@Component({
    selector: "ability-select",
    template: `
        <input [(ngModel)]="search" >
        <ul>
            <li *ngFor="let ability of abilities" (click)="onSelect(ability)">
                <img [src]="ability.key|gallery:'ability':'sm'" >
                {{ displayTag(ability) }}
            </li>
        </ul>
    `,
    styles: [
        `:host {
            display: block;
            border: 1px solid red;
        }`
    ]
})
export class AbilitySelectComponent implements OnInit {
    @Output() select: EventEmitter<any> = new EventEmitter();
    abilities: Ability[];

    search: string;

    constructor(private as: AbilityService) {

    }

    displayTag(abilitiy: Ability) {
        return abilitiy.key;
    }

    onSelect(ability: Ability) {
        this.select.emit(ability);
    }
    
    ngOnInit() {
        this.as.getAbilitiesByHeroKey('axe').subscribe(
            abilities => this.abilities = abilities
        )
    }
}