import { Component, OnInit } from '@angular/core';
import { Character } from './../character';
import { DataService } from './../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[]; //assigning mock data to characters property

  selectedCharacter: Character;
  
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.getCharacters();
  }

  getId(character: Character) {
    let url = character.url;
    let index = url.lastIndexOf('/');
    let id = url.substring(index + 1);

    return id;
  }

  onSelect(character: Character): void {
    this.selectedCharacter = character;
    let id = this.getId(this.selectedCharacter);
    this.router.navigateByUrl('/characterDetail/' + id);
  }

  getCharacters(): void {
    this.dataService.getCharacters()
      .subscribe(characters => this.characters = characters);
  }

}
