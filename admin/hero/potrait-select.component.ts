import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { HeroPotrait, HeroPotraitService } from "../../db/hero-potrait.service";

@Component({
    selector: 'potrait-select',
    templateUrl: './potrait-select.component.html',
    styleUrls: ['./potrait-select.component.css']
})
export class PotraitSelect implements OnInit {
    @Output() outputEvent = new EventEmitter();
    heroPotraits: HeroPotrait[];
    heroPotrait: HeroPotrait;

    constructor(private hps: HeroPotraitService) { }

    onSelect(hp: HeroPotrait): void {
        this.heroPotrait = hp;
        this.outputEvent.emit(hp);
    }

    isSelected(key: string) {
        if(this.heroPotrait) {
            return key == this.heroPotrait.key; 
        }
        return false;
    }

    ngOnInit(): void {
        this.hps.getHeroPotrait().subscribe(
            hpList => {
                this.heroPotraits = hpList
            }
        );
    }
}