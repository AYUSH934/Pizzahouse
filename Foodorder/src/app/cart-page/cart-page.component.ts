import { Component } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { Cart } from '../Shared/Models/Cart';
import { CartItem } from '../Shared/Models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  cart!:Cart
   constructor(private cartservice:CartService){
    this.setCart();
   }

   setCart(){
    this.cart = this.cartservice.getCart()
   }
   removeFormCart(cartItem:CartItem){
    this.cartservice.removeFormCart(cartItem.food.id)
    this.setCart();
   }
   changeQuantity(cartItem:CartItem,quantityInString:string){
     const quantity = parseInt(quantityInString);
     this.cartservice.changeQuantity(cartItem.food.id,quantity)
     this.setCart();
   }
}
