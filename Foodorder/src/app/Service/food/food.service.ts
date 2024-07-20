import { Injectable } from '@angular/core';
import { Foods } from 'src/app/Shared/Models/food';
import { Tag } from 'src/app/Shared/Models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
     return[
       {
        id:1,
        name:'Pissa Pepperoni',
        cookTime:'10-20',
        price:10,
        favorite:true,
        origins:['italy'],
        star:4.5,
        imageUrl:'/assets/foods/pizza1.jpeg',
        tags:['FastFood','Pizza','Lunch']
       },
       {
        id: 2,
        name: 'Margherita Pizza',
        cookTime: '15-25',
        price: 12,
        favorite: true,
        origins: ['Italy'],
        star: 4.2,
        imageUrl: '/assets/foods/pizza2.jpeg',
        tags: ['FastFood', 'Pizza', 'Dinner']
      },
      {
        id: 3,
        name: 'Vegetarian Pizza',
        cookTime: '12-22',
        price: 15,
        favorite: true,
        origins: ['Italy'],
        star: 4.0,
        imageUrl: '/assets/foods/pizza3.jpeg',
        tags: ['Pizza', 'Vegetarian', 'Lunch']
      },
      {
        id: 4,
        name: 'Hawaiian Pizza',
        cookTime: '18-28',
        price: 14,
        favorite: true,
        origins: ['Italy'],
        star: 4.4,
        imageUrl: '/assets/foods/pizza4.jpeg',
        tags: ['Pizza', 'Pineapple', 'Dinner']
      },
      {
        id: 5,
        name: 'BBQ Chicken Pizza',
        cookTime: '20-30',
        price: 18,
        favorite: true,
        origins: ['USA'],
        star: 4.6,
        imageUrl: '/assets/foods/pizza5.jpeg',
        tags: ['Pizza', 'Chicken', 'Dinner']
      },
      {
        id: 6,
        name: 'Mushroom Truffle Pizza',
        cookTime: '15-25',
        price: 20,
        favorite: true,
        origins: ['Italy'],
        star: 4.8,
        imageUrl: '/assets/foods/pizza6.jpeg',
        tags: ['Pizza', 'Truffle', 'Dinner']
      },
      {
        id: 7,
        name: 'Pepper and Onion Pizza',
        cookTime: '12-22',
        price: 16,
        favorite: true,
        origins: ['Italy'],
        star: 4.3,
        imageUrl: '/assets/foods/pizza7.jpeg',
        tags: ['Pizza', 'Vegetarian', 'Lunch']
      },
      {
        id: 8,
        name: 'Meat Lovers Pizza',
        cookTime: '18-28',
        price: 22,
        favorite: true,
        origins: ['USA'],
        star: 4.5,
        imageUrl: '/assets/foods/pizza8.jpeg',
        tags: ['Pizza', 'Meat', 'Dinner']
      },
     ]
  }

  getFoodById(id:number):Foods{
    return this.getAll().find(food=> food.id == id)!
  }

  getAllFoodByTag(tag:string):Foods[]{
    if(tag =='All')
    return this.getAll()
    else
    return this.getAll().filter(food=>food.tags?.includes(tag))
  }

  getAllTag():Tag[]{
    return[
      {name:'All',count:14},
      {name:'FastFood',count:4},
      {name:'Pizza',count:2},
      {name:'Lunch',count:3},
      {name:'Dinner',count:1},
      {name:'Breakfast',count:1},
      {name:'Burger',count:1}
    ]
  }
}
