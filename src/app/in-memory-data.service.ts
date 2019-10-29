import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const sessionId = {
      "sessionId": "a4993e3f-db38-455d-b7cd-9619c94d0791"
    }
    return { sessionId };
  }

}
