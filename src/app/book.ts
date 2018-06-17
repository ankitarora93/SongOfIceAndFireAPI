import { Character } from './character';

export class Book {
    url: string;
    name: string;
    isbn: string;
    authors: string[];
    numberOfPages: number;
    publisher: string;
    country: string;
    mediaType: string; //hardcover, etc.
    released: string;
    characters: Character[];
    povCharacters:Character[];
}