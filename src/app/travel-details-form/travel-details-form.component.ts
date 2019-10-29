import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HtppService} from './../htpp.service';
@Component({
  selector: 'app-travel-details-form',
  templateUrl: './travel-details-form.component.html',
  styleUrls: ['./travel-details-form.component.scss']
})
export class TravelDetailsFormComponent implements OnInit {
   hotelDetails:any =[];
  constructor(private htppService:HtppService) { }

  ngOnInit() {
  }
  travelDetails = new FormGroup({
    placeName: new FormControl(''),
    checkInDate: new FormControl(),
    checkOutDate: new FormControl(''),
    noOfGuest: new FormControl('')
  });

  getNoOfGuest(_guestCount){
   this.travelDetails.patchValue({
     noOfGuest:_guestCount
   });
  }
  initSearch(){
    console.log(this.travelDetails.value)
    this.htppService.initSearch(this.travelDetails.value).subscribe( (response) => {
        this.getSearchStatus(response);
    });
  }

  getSearchStatus(_sessionIdObj) {
    this.htppService.searchStatus(_sessionIdObj).subscribe((res:any) => {
        if(res.status === 'Complete') {
           this.getSearchResult(_sessionIdObj);
        } else {
          console.log('else')
          this.getSearchStatus(_sessionIdObj);
        }
    });
  }
  getSearchResult(_sessionIdObj) {
   this.htppService.searchResult(_sessionIdObj).subscribe( (res:any) => {
    this.hotelDetails = res.hotels; 
    console.log(res);
   });
  }

}
