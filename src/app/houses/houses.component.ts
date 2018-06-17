import { Component, OnInit } from '@angular/core';
import { House } from './../house';
import { NullAstVisitor } from '@angular/compiler';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  house: House = {
    "name": "House Targaryen of King's Landing",
    "region": "The Crownlands",
    "coatOfArms": "Sable, a dragon thrice-headed gules",
    "words": "Fire and Blood",
    "titles": [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Prince of Summerhall"
    ],
    "seats": [
      "Red Keep (formerly)",
      "Summerhall (formerly)"
    ],
    "currentLord": null,
    "heir": null,
    "overlord": null,
    "founded": "House Targaryen: >114 BCHouse Targaryen of King's Landing:1 AC",
    "founder": null,
    "diedOut": "",
    "ancestralWeapons": [
      "Blackfyre",
      "Dark Sister"
    ],
    "cadetBranches": [],
    "swornMembers": []
  }

  constructor() { }

  ngOnInit() {
  }

}
