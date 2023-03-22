import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
  public food : any = [];
  public getTotal !: number;
  count = 0;
  constructor(private cartService : CartService) {
   this.count = this.cartService.countItem.count;
  }
  ngOnInit(): void {
    this.cartService.getFoods()
    .subscribe(res=>{
      this.food = res;
      this.getTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(Item:any){
    this.cartService.removeItem(Item);
  }
}
