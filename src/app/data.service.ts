/**
 * This service to fetch data from the server. 
 */

import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  private booksUrl = "https://www.anapioficeandfire.com/api/books";
  private charactersUrl = "https://www.anapioficeandfire.com/api/characters";
  private housesUrl = "https://www.anapioficeandfire.com/api/houses";

  constructor(private http: HttpClient) { }


  private getDataFromUrl(url: string): any {
    let response = this.http.get(url);
    return response;
  }

  getBooks(): any {
    // return of(BOOKS);
    return this.getDataFromUrl(this.booksUrl);
  }

  getHouses(): any {
    // return of(HOUSES);
    return this.getDataFromUrl(this.charactersUrl);
  }

  getCharacters(): any {
    // return of(CHARACTERS);
    return this.getDataFromUrl(this.housesUrl);
  }

  //returning info about SINGLE book
  getBookDetail(id: string) {
    let url = "https://anapioficeandfire.com/api/books/";
    return of(BOOKS.find(book => book.url === (url + id)));
  }

  //return info about SINGLE character
  getCharacterDetail(id: string) {
    let url = "https://anapioficeandfire.com/api/characters/";
    return of(CHARACTERS.find(character => character.url === (url + id)));
  }

  getHouseDetail(id: string) {
    let url = "https://anapioficeandfire.com/api/houses/";
    return of(HOUSES.find(house => house.url === (url + id)));
  }

}
