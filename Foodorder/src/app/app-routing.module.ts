import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CompleteCheckOutComponent } from './complete-check-out/complete-check-out.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchItem',component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'food/:id',component:FoodpageComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'checkout',component:CompleteCheckOutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
