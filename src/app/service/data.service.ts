import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiEnpoint = "http://localhost/Restaurant";
  constructor() { }
}
