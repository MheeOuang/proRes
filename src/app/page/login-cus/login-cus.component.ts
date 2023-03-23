import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Convert as CustomerCvt,Customer } from 'src/app/model/customer';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';

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
    }else{
      this.router.navigateByUrl('/loginCus');
    }
    console.log(this.customer);

  }
}
