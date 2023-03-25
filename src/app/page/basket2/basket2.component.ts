import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Convert as CusBasketCvt, CusBasket} from 'src/app/model/cusBasket';
import { Convert as FoodOrderCvt, FoodOrder} from 'src/app/model/foodOrder';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket2',
  templateUrl: './basket2.component.html',
  styleUrls: ['./basket2.component.scss']
})
export class Basket2Component {
  foodOrders = Array<CusBasket>();
  // foodOrder : any;
  total : any;
  oid : any;
  sumPrice = Array();
  constructor(private dataService : DataService , private http: HttpClient ,private router: Router){
    this.oid = this.dataService.oid;
    this.showOrder(this.oid);
  }


  showOrder(oid : any){
    this.total = 0;
    this.http.get(this.dataService.apiEnpoint+'/consistof/order/' +oid).subscribe((data:any)=>{
      this.foodOrders = CusBasketCvt.toCusBasket(JSON.stringify(data));
      for(let i = 0 ; i<this.foodOrders.length;i++){
        this.total = this.total +(this.foodOrders[i].amount * this.foodOrders[i].price);
      }
      console.log(this.foodOrders);
    });

  }

  del(oid: any,fid : any){
    console.log(oid,fid);
    let jsonObj = {
      oid : oid,
      fid : fid
    }
    let jsonString = JSON.stringify(jsonObj);
    this.http.post(this.dataService.apiEnpoint + "/consistof/del", jsonString,
      { observe: 'response' }).subscribe((response) => {});

    // this.router.navigateByUrl('/basket2');

  }

}

// for(let i = 0 ; i<this.foodOrder.length;i++){
      //   this.total = this.total +(this.foodOrder[i].amount * this.foodOrder[i].price);
      // }
