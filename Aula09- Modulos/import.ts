import  Spaceship  from "./export.ts";
import * as lodash from "lodash"

interface BattleSpacesShips extends Spaceship {
    weapons: number
}

let xwing: BattleSpacesShips = {
    name: 'mib',
    pilot: 'Giovaniiii',
    velocity: 21,
    weapons: 2
}

console.log(lodash.camelCase(xwing.pilot))

