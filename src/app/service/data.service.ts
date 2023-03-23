import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiEnpoint = "http://localhost/Restaurant";
<<<<<<< Updated upstream
  constructor() { }
}
=======
  basket = new basket();



}
class basket{
  idx = 0;
  name = "";
  price = 0;
  count = 0;
  img = '';
  detail = '';
  tid = 0;

}
>>>>>>> Stashed changes
