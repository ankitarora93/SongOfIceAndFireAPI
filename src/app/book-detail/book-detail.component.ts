import { Component, OnInit, Input } from '@angular/core';
import { Book } from './../book';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService} from './../data.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() book: Book;

  constructor(private route: ActivatedRoute, private dataService: DataService, private location: Location) { }

  ngOnInit() {
    this.getBook();
  }

  getBook(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.dataService.getBookDetail(id)
      .subscribe(book => this.book = book);
  }

}
