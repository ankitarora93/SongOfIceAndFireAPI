import { Component, OnInit } from '@angular/core';
import { Book } from './../book';
import { DataService } from './../data.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];

  selectedBook: Book; //the book that was selected by the user

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getBooks();
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  getBooks(): void {
    this.dataService.getBooks()
      .subscribe(books => this.books = books);
  }

}
