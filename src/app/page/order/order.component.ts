import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Convert as orderCvt, Order} from 'src/app/model/order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  orders = Array<Order>();
  constructor(private dataService: DataService,private http: HttpClient){
    http.get(dataService.apiEnpoint + '/order').subscribe((data: any)=>{
      this.orders = orderCvt.toOrder(JSON.stringify(data));
      console.log(this.orders);
    });
  }
}
