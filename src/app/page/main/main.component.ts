import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/service/data.service';
import { Convert as FoodtypeCvk,Foodtype } from 'src/app/model/foodtype';
import { Convert as  FoodCvk,Food} from 'src/app/model/food';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  foods = Array<Food>();
  foodtypes = Array<Foodtype>();
  Searchtype = new Array<any>();
  SelectFood : any;
  showtype = "ทั้งหมด";
  sum = 0;
  countCart = 0;
  count = 0;
  showbytype : any;
  type = Array<any>();
  constructor(private dataService : DataService,private http : HttpClient){
    this.showtype = "ทั้งหมด";
    this.http.get(dataService.apiEnpoint+'/food').subscribe((data:any)=>{
      this.foods = FoodCvk.toFood(JSON.stringify(data));
    });
    this.http.get(dataService.apiEnpoint+'/foodtype').subscribe((data:any)=>{
      this.foodtypes = FoodtypeCvk.toFoodtype(JSON.stringify(data));

    });
  }
  show(Id:any){
    for(let index = 0;index<this.foods.length;index++){
      if(this.foods[index].fid == Id){
        this.SelectFood = this.foods[index];
      }
    }
  }
  plus(){
    this.count = this.count+1;
  }
  delete(){
    this.count = this.count-1;
    if(this.count < 0 ){
      this.count = 0;
    }
  }

  SearchType(type : any){
    this.showtype = "ทั้งหมด";
    this.http.get(this.dataService.apiEnpoint + '/food/tid/' + type).subscribe((data: any)=>{
      this.type = FoodCvk.toFood(JSON.stringify(data));
      this.foods = this.type;
    });
  }

  TypeAll(){
    this.http.get(this.dataService.apiEnpoint + '/food').subscribe((data:any)=>{
      this.type = FoodCvk.toFood(JSON.stringify(data));
      console.log(this.type);
      this.foods = this.type;
    });
  }

  addToCart(Id:any){

  }
}
