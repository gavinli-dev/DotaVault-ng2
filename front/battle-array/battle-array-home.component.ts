import { Component, OnInit }         from '@angular/core';
import { Router, ActivatedRoute }    from '@angular/router';

import { BattleArray, BattleArrayService }  from './battle-array.service';
import { BattleArrayComponent }             from './battle-array.component';

@Component({
    template: `
        <h3>Battle Array Home</h3>
    `
})

export class BattleArrayHomeComponent implements OnInit{
    ba: BattleArray;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private bas: BattleArrayService
    ) { }

    ngOnInit(): void {
        // this.route.params.forEach(p => {
        //     let id = +p['id'];
        //     this.ba = this.bas.getBattleArrayById(id);
        // });
    }

    goBack() {
        // let id = this.ba ? this.ba.id : null;
        // this.router.navigate(['/battle-array-list', {id: id}]);
    }
}