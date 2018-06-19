import { Component, OnInit, Input } from '@angular/core';
import { Character } from './../character';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService} from './../data.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

 @Input() character: Character;

  constructor(private route: ActivatedRoute, private dataService: DataService, private location: Location) { }

  ngOnInit() {
    this.getCharacter();
  }

  getCharacter(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.dataService.getCharacterDetail(id)
      .subscribe(character => this.character = character);
  }

}
