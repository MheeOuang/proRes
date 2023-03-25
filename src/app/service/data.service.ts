import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiEnpoint = "http://localhost/Restaurant";
  basket = new basket;
  customer : any;
  oid : any;
  CusBasket : any;
  constructor() { }
}
class basket{
  fid = 0;
  name = "";
  price =0;
  count = 0;
}
