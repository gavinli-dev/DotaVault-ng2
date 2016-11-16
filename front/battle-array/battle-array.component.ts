import { Component, OnInit }         from '@angular/core';
import { Router, ActivatedRoute }    from '@angular/router';

import { BattleArray, BattleArrayService }  from './battle-array.service';

@Component({
    selector: 'battle-array',
    template: `
        <h2>Battle Array</h2>

        <div>battle array:</div>
        <div>slot one: {{ba.slot_1}}</div>
        <div>slot two: {{ba.slot_2}}</div>
        <div>slot three: {{ba.slot_3}}</div>
        <div>slot four: {{ba.slot_4}}</div>
        <div>slot five: {{ba.slot_5}}</div>
        <button (click)='goBack()'>back</button>
    `
})

export class BattleArrayComponent implements OnInit{
    ba: BattleArray;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private bas: BattleArrayService
    ) { }

    ngOnInit(): void {
        this.route.params.forEach(p => {
            let id = +p['id'];
            this.ba = this.bas.getBattleArrayById(id);
        });
    }

    goBack() {
        let id = this.ba ? this.ba.id : null;
        this.router.navigate(['/battle-array-list', {id: id}]);
    }
}