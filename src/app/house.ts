import { Character } from './character';

export class House {
    name: string;
    region: string;
    coatOfArms: string;
    words: string;
    titles: string[];
    seats: string[];
    currentLord: Character;
    heir: Character;
    overlord: Character;
    founded: string;
    founder: Character;
    diedOut: string;
    ancestralWeapons: string[];
    cadetBranches: House[]; //list of houses
    swornMembers: Character[]; //list of characters
}