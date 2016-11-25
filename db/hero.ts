export class Hero {
    id:                 string;
    key:                string;
    name:               string;
    faction:            string;
    primaryAttribute:   string;
    attackType:         string;
    role = {
        hardCarry: 0,
        semiCarry: 0,
        ganker: 0,
        roamer: 0,
        offlaner: 0
    };
    abilities:          any;
}