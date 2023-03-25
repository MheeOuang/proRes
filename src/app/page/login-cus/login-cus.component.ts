import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Convert as CustomerCvt,Customer } from 'src/app/model/customer';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { Convert as orderCvt, Order} from 'src/app/model/order.model';
import { Convert as OidCvt,Oid} from 'src/app/model/oid';

@Component({
  selector: 'app-login-cus',
  templateUrl: './login-cus.component.html',
  styleUrls: ['./login-cus.component.scss']
})
export class LoginCusComponent {
  customer:  any;
  path = '';
  constructor(private router : Router,private dataService: DataService,private http: HttpClient){

  }
  async login(name : any,password :any){
    let jsonObj = {
      name : name,
      password : password
    }
    let jsonString = JSON.stringify(jsonObj);
    let data :any = await lastValueFrom(this.http.post(this.dataService.apiEnpoint + '/login/customer' , jsonString));
    this.customer = CustomerCvt.toCustomer(JSON.stringify(data));
    if(this.customer != null){
      this.router.navigateByUrl('/main');
      this.dataService.customer = this.customer;  //save to data service

      this.checkOrder();
    }else{
      this.router.navigateByUrl('/loginCus');
    }
    // console.log(this.customer[0]);
    // console.log(this.dataService.customer[0].cid);
  }
  async checkOrder(){
    let jsonObj = {
      cid : this.dataService.customer[0].cid
    }
    let jsonString = JSON.stringify(jsonObj);
    let data :any = await lastValueFrom(this.http.post(this.dataService.apiEnpoint + "/iorder/notpay", jsonString));
    console.log(data[0].oid);

    if(data[0].oid == undefined) {
      this.insertIorder();
      console.log('create new user');

    }else{
      this.dataService.oid = data[0].oid;
      console.log(this.dataService.oid);
    }

  }

  async insertIorder(){
    //create order
    let jsonObj = {
      cid : this.dataService.customer[0].cid
    }
    let jsonString = JSON.stringify(jsonObj);
    let data :any = await lastValueFrom(this.http.post(this.dataService.apiEnpoint + "/iorder/insert", jsonString));
    // console.log(data[0].oid);
    this.dataService.oid = data[0].oid;
    // console.log(this.dataService.oid);

  }
}
