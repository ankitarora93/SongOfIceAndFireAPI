import { Component, OnInit, Input } from '@angular/core';
import { House } from './../house';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from './../data.service';


@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  house;
  sMemebers = []; 

  constructor(private route: ActivatedRoute, private dataService: DataService, private location: Location) { }

  ngOnInit() {
    this.getHouse();
  }

  //We need this to get all sworn members in the JSON 
  getMembersFromHouses() {
    for (const memUrl of this.house.swornMembers) {
      let index = memUrl.lastIndexOf('/');
      let id = memUrl.substring(index + 1);
      let mem;
      let character = this.dataService.getCharacterDetail(id)
        .subscribe(mems => {mem = mems; this.sMemebers.push(mem.name)});
    }
  }

  getHouse(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.dataService.getHouseDetail(id)
      .subscribe(house => {this.house = house; this.getMembersFromHouses()});
  }

}
