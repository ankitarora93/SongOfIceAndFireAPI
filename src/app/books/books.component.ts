import { Component, OnInit } from '@angular/core';
import { Book } from './../book';
import { DataService } from './../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books;

  selectedBook; //the book that was selected by the user

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.getBooks();
  }

  getId(book: any): string {
    let url: string = book.url;
    let index = url.lastIndexOf('/');
    let id = url.substr(index + 1);
    
    return id;
  }

  onSelect(book: any): void {
    this.selectedBook = book;
    let id = this.getId(this.selectedBook);
    this.router.navigateByUrl('/bookDetail/'+id);
  }

  getBooks(): void {
    this.dataService.getBooks()
      .subscribe(books => this.books = books);
  }

}
