import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  CardName:string="New Product";
  CardImage:String="assets/Images/1.jpg";
  CardDescription:string="Our Products Is very very useFull for you"

}
