import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  constructor(private dataService : DataService , private http: HttpClient,private router:Router){}

  createUser(name : any , password : any , phone : any , address : any){
    let jsonObj = {
      name: name,
      password : password,
      phone : phone,
      address : address
    }

    let jsonString = JSON.stringify(jsonObj);
    this.http.post(this.dataService.apiEnpoint + "/login/create" ,jsonString,
    {observe: 'response'}).subscribe((response)=>{
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      this.router.navigateByUrl('/loginCus');
    });
  }
}
