import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/service/data.service';
import { Convert as FoodtypeCvk, Foodtype } from 'src/app/model/foodtype';
import { Convert as FoodCvk, Food } from 'src/app/model/food';
import { CartService } from 'src/app/service/cart.service';
import { Convert as CusBasketCvt, CusBasket} from 'src/app/model/cusBasket';
import { Convert as ConsistofCvt, Consistof} from 'src/app/model/consistof';
import { Convert as CustomerCvt , Customer} from 'src/app/model/customer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  foods = Array<Food>();
  foodtypes = Array<Foodtype>();
  Searchtype = new Array<any>();
  SelectFood: any;
  showtype = "ทั้งหมด";
  count = 0;
  showbytype: any;
  totalItem = 0;
  type = Array<any>();
  food: any;
  consistof = Array<Consistof>();
  customer = Array<Customer>();
  money : any;
  cid = this.dataService.customer[0].cid;

  constructor(private cart: CartService, private dataService: DataService, private http: HttpClient) {
    this.showtype = "ทั้งหมด";
    this.selectCustomerInfo(this.cid);


    this.http.get(dataService.apiEnpoint + '/food').subscribe((data: any) => {
      this.foods = FoodCvk.toFood(JSON.stringify(data));
    });
    this.http.get(dataService.apiEnpoint + '/foodtype').subscribe((data: any) => {
      this.foodtypes = FoodtypeCvk.toFoodtype(JSON.stringify(data));
    });
  }

  show(Id: any) {
    for (let index = 0; index < this.foods.length; index++) {
      if (this.foods[index].fid == Id) {
        this.SelectFood = this.foods[index];
      }
    }
  }
  plus() {
    this.count = this.count + 1;
  }
  delete() {
    this.count = this.count - 1;
    if (this.count < 0) {
      this.count = 0;
    }
  }
  SearchType(type: any) {
    this.showtype = "ทั้งหมด";
    this.http.get(this.dataService.apiEnpoint + '/food/tid/' + type).subscribe((data: any) => {
      this.type = FoodCvk.toFood(JSON.stringify(data));
      this.foods = this.type;
    });
  }
  TypeAll() {
    this.http.get(this.dataService.apiEnpoint + '/food').subscribe((data: any) => {
      this.type = FoodCvk.toFood(JSON.stringify(data));
      this.foods = this.type;
    });
  }
  addToCart(basket: any, count: any) {
    if (count > 0) {
      let jsonObj = {
        oid: this.dataService.oid,
        fid: basket.fid,
        amount: count
      }
      let jsonString = JSON.stringify(jsonObj);
      this.http.post(this.dataService.apiEnpoint + '/consistof/check' ,jsonString).subscribe((data: any) => {
        this.consistof = ConsistofCvt.toConsistof(JSON.stringify(data));
        // console.log(data[0].amount);
        if(data[0] == undefined) {
          this.http.post(this.dataService.apiEnpoint + "/consistof/insert", jsonString,
          { observe: 'response' }).subscribe((response) => {});

        }else{
          count = data[0].amount + count;
          jsonObj.amount = count;
          let jsonString = JSON.stringify(jsonObj);
          this.http.post(this.dataService.apiEnpoint + "/consistof/updateOldMenu", jsonString,
          { observe: 'response' }).subscribe((response) => {});
        }
      });
    }
  }

  plusMoney(cid : any){
    this.http.get(this.dataService.apiEnpoint + "/customer/update/moneyPlus/"+cid,
    { observe: 'response' }).subscribe((response) => {});
    this.selectCustomerInfo(this.cid);
  }

  selectCustomerInfo(cid : any){
    this.http.get(this.dataService.apiEnpoint + '/customer/select/' + cid).subscribe((data: any) => {
      this.customer = CustomerCvt.toCustomer(JSON.stringify(data))
      this.dataService.customer = this.customer;
      this.money = this.customer[0].money;
    });
  }
}


