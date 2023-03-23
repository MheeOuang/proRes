import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Convert as OwnerCvt,Owner } from 'src/app/model/owner';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-owner',
  templateUrl: './login-owner.component.html',
  styleUrls: ['./login-owner.component.scss']
})
export class LoginOwnerComponent {
  owner:  any;
  path = '';
  constructor(private router : Router,private dataService: DataService,private http: HttpClient){

  }
  async login(username : any,password :any){
    let jsonObj = {
      username : username,
      password : password
    }
    let jsonString = JSON.stringify(jsonObj);
    let data :any = await lastValueFrom(this.http.post(this.dataService.apiEnpoint + '/login/owner' , jsonString));
    this.owner = OwnerCvt.toOwner(JSON.stringify(data));
    if(this.owner != null){
      this.router.navigateByUrl('/order');
    }else{
      this.router.navigateByUrl('/loginOwner');
    }
    console.log(this.owner);
  }
}
