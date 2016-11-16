import { Injectable } from '@angular/core';

export class BattleArray {
    id: number;
    slot_1: number;
    slot_2: number;
    slot_3: number;
    slot_4: number;
    slot_5: number;
}

const BAL: BattleArray[] = [
    {id: 1, slot_1: 1, slot_2: 2, slot_3: 3, slot_4: 4, slot_5: 5}
];

@Injectable()
export class BattleArrayService {
    getBattleArrayList() {
        var bal = BAL;

        return bal;
    }

    getBattleArrayById(id: number): BattleArray {
        return BattleArray[id - 1];
    }
}