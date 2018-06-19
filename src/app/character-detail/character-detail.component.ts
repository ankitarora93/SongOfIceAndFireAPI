import { Component, OnInit, Input } from '@angular/core';
import { Character } from './../character';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from './../data.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character;
  books = [];
  allegiances = [];

  constructor(private route: ActivatedRoute, private dataService: DataService, private location: Location) { }

  ngOnInit() {
    this.getCharacter();
  }


  //We need to get specific houses mention in the JSON
  getAllAlegiances() {
    for (const houseUrl of this.character.allegiances) {
      let index = houseUrl.lastIndexOf('/');
      let id = houseUrl.substring(index + 1);
      let houseDet;
      let character = this.dataService.getHouseDetail(id)
        .subscribe(house => 
          {houseDet = house; this.books.push(houseDet.name)});
    }
  }

  //We need to get specific books metioned in the JSON
  getAllBooksFromCharacter() {
    for (const bookUrl of this.character.books) {
      let index = bookUrl.lastIndexOf('/');
      let id = bookUrl.substring(index + 1);
      let bookDet;
      let character = this.dataService.getBookDetail(id)
        .subscribe(book => 
          {
            bookDet = book; 
            this.books.push(bookDet.name)
          });
    }
  }

  getCharacter(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.dataService.getCharacterDetail(id)
      .subscribe(character => 
        {
          this.character = character; 
          this.getAllBooksFromCharacter();
          this.getAllAlegiances();
        });
  }

}
