import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Convert as orderCvt, Order} from 'src/app/model/order.model';
import { Convert as FoodOrderCvt, FoodOrder} from 'src/app/model/foodOrder';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  orders = Array<Order>();
  foodOrders = Array<FoodOrder>();
  Total = 0;
  sumPrice = Array();
  router: any;
  constructor(private dataService: DataService,private http: HttpClient){
    http.get(dataService.apiEnpoint + '/order').subscribe((data: any)=>{
      this.orders = orderCvt.toOrder(JSON.stringify(data));
      console.log(this.orders);
    });



  }

  show(oid : number){
    this.Total = 0;
    this.http.get(this.dataService.apiEnpoint+'/order/info/' + oid).subscribe((data:any)=>{
      this.foodOrders = FoodOrderCvt.toFoodOrder(JSON.stringify(data));
      for(let i = 0 ; i<this.foodOrders.length;i++){
        this.Total = this.Total +(this.foodOrders[i].amount * this.foodOrders[i].price);
      }
    });
    console.log(this.foodOrders);

  }
}
