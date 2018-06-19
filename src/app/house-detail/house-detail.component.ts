import { Component, OnInit, Input } from '@angular/core';
import { House } from './../house';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService} from './../data.service';


@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

 @Input() house: House;

  constructor(private route: ActivatedRoute, private dataService: DataService, private location: Location) { }

  ngOnInit() {
    this.getHouse();
  }

  getHouse(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.dataService.getHouseDetail(id)
      .subscribe(house => this.house = house);
  }

}
