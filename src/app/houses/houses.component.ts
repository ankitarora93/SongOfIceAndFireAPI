import { Component, OnInit } from '@angular/core';
import { House } from './../house';
import { NullAstVisitor } from '@angular/compiler';
import { DataService } from './../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  houses;

  selectedHouse;
  
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.getHouses();
  }

  getId(house: any) {
    let url = house.url;
    let index = url.lastIndexOf('/');
    let id = url.substring(index + 1);

    return id;
  }

  onSelect(house: any): void {
    this.selectedHouse = house;
    let id = this.getId(this.selectedHouse);
    this.router.navigateByUrl('/houseDetail/'+id);
  }

  getHouses(): void {
    this.dataService.getHouses()
      .subscribe(houses => this.houses = houses);
  }
}
