import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { HeroPotrait, HeroPotraitService } from "../../db/hero-potrait.service";

@Component({
    selector: 'potrait-select',
    templateUrl: './potrait-select.component.html',
    styleUrls: ['./potrait-select.component.css']
})
export class PotraitSelect implements OnInit {

    @Input() heroPotrait;
    @Output() outputEvent = new EventEmitter();
    heroPotraits: HeroPotrait[];
    
    constructor(private hps: HeroPotraitService) { }

    onSelect(hp): void {
        this.heroPotrait = hp;
        this.outputEvent.emit(hp);
    }

    ngOnInit(): void {
        this.hps.getHeroPotrait().subscribe(
            hpList => {
                this.heroPotraits = hpList
            }
        );
    }
}