import { Component, OnInit } from '@angular/core';
import { House } from './../house';
import { NullAstVisitor } from '@angular/compiler';
import { DataService } from './../data.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  houses: House[];

  selectedHouse: House;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getHouses();
  }

  onSelect(house: House): void {
    this.selectedHouse = house;
  }

  getHouses(): void {
    this.dataService.getHouses()
      .subscribe(houses => this.houses = houses);
  }
}
