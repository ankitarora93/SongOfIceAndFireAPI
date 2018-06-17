import { Component, OnInit } from '@angular/core';
import { Book } from './../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  book: Book = {
    "name": "A Game of Thrones",
    "isbn": "978-0553103540",
    "authors": [
      "George R. R. Martin"
    ],
    "numberOfPages": 694,
    "publisher": "Bantam Books",
    "country": "United States",
    "mediaType": "Hardcover",
    "released": "1996-08-01T00:00:00",
    "characters": [],
    "povCharacters": []
  }

  constructor() { }

  ngOnInit() {
  }

}
