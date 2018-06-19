import { Component, OnInit, Input } from '@angular/core';
import { Book } from './../book';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from './../data.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book;
  characters = [];

  constructor(private route: ActivatedRoute, private dataService: DataService, private location: Location) { }

  ngOnInit() {
    this.getBook();
  }

  //We need this here because we would need to display character name from url in the //books JSON
  getAllCharactersFromBooks() {
    for (const characterUrl of this.book.characters) {
      let index = characterUrl.lastIndexOf('/');
      let id = characterUrl.substring(index + 1);
      let char;
      let character = this.dataService.getCharacterDetail(id)
        .subscribe(character => {char = character; this.characters.push(char.name)});
    }
  }

  getBook(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.dataService.getBookDetail(id)
      .subscribe(book => {this.book = book; this.getAllCharactersFromBooks()});
  }

}
