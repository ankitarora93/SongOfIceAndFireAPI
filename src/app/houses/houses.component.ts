import { Component, OnInit } from '@angular/core';
import { House } from './../house';
import { NullAstVisitor } from '@angular/compiler';
import { HOUSES } from './../mock-houses';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  houses = HOUSES;

  constructor() { }

  ngOnInit() {
  }

}
