import { Book } from './book';
import { House } from './house';

export class Character {
    url: string;
    name: string;
    gender: string;
    culture: string;
    born: string;
    died: string;
    titles: string[];
    aliases: string[];
    father: string;
    mother: string;
    spouse: string;
    allegiances: House[];
    books: Book[];
    povBooks: Book[];
    tvSeries: string[];
    playedBy: string[];
}