import { Component, OnInit } from '@angular/core';
import { Character } from './../character';
import { DataService } from './../data.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[]; //assigning mock data to characters property

  selectedCharacter: Character;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getCharacters();
  }

  onSelect(character: Character): void {
    this.selectedCharacter = character;
  }

  getCharacters(): void {
    this.dataService.getCharacters()
      .subscribe(characters => this.characters = characters);
  }

}
