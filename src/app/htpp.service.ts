import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class HtppService {
   public searchInitURL: string  = 'https://public-be.oski.io/hotel/v1.0/search/init';
   public searchStatusURL: string  = 'https://public-be.oski.io/hotel/v1.0/search/status';
   public searchResultURL: string  = 'https://public-be.oski.io/hotel/v1.0/search/results';

 
  httpOptions = {
    headers: new HttpHeaders({
      'oski-tenantId': 'Demo',
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  initSearch(_travelDetails) {
    return this.http.post(this.searchInitURL, this.getInitRequestObj(_travelDetails));
  }
  searchStatus(_requestObj) {
    return this.http.post(this.searchStatusURL, _requestObj);
  }
  searchResult(_requestObj) {
    return this.http.post(this.searchResultURL, this.getResultRequestObj(_requestObj));
  }
  getInitRequestObj(_travelDetails) {
    const requestBody = {
      "currency": "USD",
      "posId": "hbg3h7rf28",
      "orderBy": "price asc, rating desc",
      "roomOccupancies": [
        {
          "occupants": [
            {
              "type": "Adult",
              "age": 25
            }
          ]
        }
      ],
      "stayPeriod": {
        "start": this.datePipe.transform(_travelDetails.checkInDate, 'MM/dd/yyyy'),
        "end": this.datePipe.transform(_travelDetails.checkOutDate, 'MM/dd/yyyy')
      },
      "bounds": {
        "circle": {
          "center": {
            "lat": 49.0097,
            "long": 2.5479
          },
          "radiusKm": 50.5
        }
      }
    };
    return requestBody;
  }

  getResultRequestObj(_requestObj) {
    const reqObj = {
      "sessionId": _requestObj.sessionId,
      "paging": {
        "pageNo": 1,
        "pageSize": 5,
        "orderBy": "price asc, rating desc"
      },
      "optionalDataPrefs": [
        "All"
      ],
      "currency": "USD",
      "contentPrefs": [
        "Basic",
        "Activities",
        "Amenities",
        "Policies",
        "AreaAttractions",
        "Descriptions",
        "Images",
        "CheckinCheckoutPolicy",
        "All"
      ],
      "filters": {
        "minHotelPrice": 1,
        "maxHotelPrice": 10000,
        "minHotelRating": 1,
        "maxHotelRating": 5,
        "hotelChains": [
          "Novotel",
          "Marriott",
          "Hilton",
          "Accor"
        ],
        "allowedCountry": "FR"
      }
    };
    return reqObj;
  }
}
