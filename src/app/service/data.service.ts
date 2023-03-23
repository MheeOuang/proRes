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
  detail = "";
  img = "";
  price =0;
  tid = 0;
  count = 0;
}
