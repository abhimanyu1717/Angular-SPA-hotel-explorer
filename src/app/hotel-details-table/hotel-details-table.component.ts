import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-details-table',
  templateUrl: './hotel-details-table.component.html',
  styleUrls: ['./hotel-details-table.component.scss']
})
export class HotelDetailsTableComponent implements OnInit {
 @Input() hotels:any;
  constructor() { }

  ngOnInit() {
  }

}
