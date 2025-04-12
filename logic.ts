import { Mini, Talent, Minies, Talents } from "./enums";

function findKeyByValue<T extends object>(o: T, v: unknown): keyof T | undefined {
    for (const key in Object.keys(o)) {
        if (o[key] === v) {
            return key as keyof T
        }
    }
}

export class Troop {
    readonly mini: Mini;
    readonly talent: Talent;
    constructor(
        readonly miniID: number,
        readonly talentID: number = miniID << 2
    ) {
        const mini = findKeyByValue(Minies, miniID)
        const talent = findKeyByValue(Talents, talentID)
        if (((talentID >> 2) !== miniID) || !mini || !talent) {
            throw new Error('Invalid mini params');
        }
    }

    get code() { return [this.miniID, this.talentID] }
    static new(miniID: number) {
        return new Troop(miniID)
    }
}

const TEST_DECK = generate(
    Troop.new(Minies.Sylvanas),
    [
        Minies.Abomination,
        Minies.Meatwagon,
        Minies.CheatDeath,
        Minies.DarkspearTroll,
        Minies.Shaman,
        Minies.DarkIronMiner,
    ].map(Troop.new),
)

export function generate(leader: Troop, minies: Troop[]) {
    if (minies.length !== 6) {
        throw new Error('Too many minies');
    }

    return new Uint32Array([leader, ...minies].flatMap(u => u.code)).buffer
}
