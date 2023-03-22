import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiEnpoint = "http://localhost/Restaurant";
  basket = new basket;
  constructor() { }
}
class basket{
  idx = 0;
  name = "";
  price = 0;
  count = 0;
}
