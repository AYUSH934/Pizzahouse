import { Component } from '@angular/core';
import { Foods } from '../Shared/Models/food';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FoodService } from '../Service/food/food.service';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent {
  food!:Foods

  constructor(private activeroute:ActivatedRoute,private foodService : FoodService,private cartservice:CartService,private router:Router){
    activeroute.params.subscribe((params)=>{
      if(params['id']){
        this.food = foodService.getFoodById(params['id'])
      }
    })
  }

  addToCart(){
    this.cartservice.addToCart(this.food)
    this.router.navigateByUrl('/cart-page')
  }
}
