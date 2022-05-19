import { Component, OnInit, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css'],
})
export class HousingListComponent implements OnInit {
  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];

  constructor() {}

  ngOnInit(): void {}

  searchHousingLocations(searchText: string) {
    this.results = this.locationList.filter((location) =>
      location.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
