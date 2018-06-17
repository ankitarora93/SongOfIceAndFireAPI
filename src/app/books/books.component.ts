import { Component, OnInit } from '@angular/core';
import { Book } from './../book';
import { BOOKS } from './../mock-books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books = BOOKS; //assigning the mock data to the books property

  constructor() { }

  ngOnInit() {
  }

}
