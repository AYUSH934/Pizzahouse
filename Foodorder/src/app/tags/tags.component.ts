import { Component, OnInit } from '@angular/core';
import { Tag } from '../Shared/Models/tag';
import { FoodService } from '../Service/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
 tags:Tag[]=[]

 constructor(private fs:FoodService){

 }
 
 ngOnInit(): void {
     this.tags = this.fs.getAllTag();
 }

}
