/**
 * This service to fetch data from the server. 
 */

import { Injectable } from '@angular/core';

import { Book } from './book';
import { BOOKS } from './mock-books';

import { Character } from './character';
import { CHARACTERS } from './mock-characters';

import { House } from './house';
import { HOUSES } from './mock-houses';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getBooks(): Book[] {
    return BOOKS;
  }

  getHouses(): House[] {
    return HOUSES;
  }

  getCharacters(): Character[] {
    return CHARACTERS;
  }
}
