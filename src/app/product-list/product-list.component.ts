import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  pageTitle: string;
  showImage: boolean = false;
  products: IProduct[];
  listFilter: string = 'cushion';
  message: string = '';

  constructor() { 
    this.pageTitle = '<--- Product List --->';
    this.products = [
      {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2459,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
      },
      {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.20,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
      },
      {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8898,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
      },
      {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7778,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
      },
      {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.66,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
      },
      {
        "productId": 11,
        "productName": "Cushion",
        "productCode": "GGG-0092",
        "releaseDate": "December 25, 2013",
        "description": "Comfy cushion for you",
        "price": 2.99,
        "starRating": 4.955,
        "imageUrl": "https://openclipart.org/image/2400px/svg_to_png/308858/1540384514.png"
      }
    ];
  }

  onRatingClicked(event): void {
    this.message = 'The rating ' + event + ' was clicked';
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {

  }

}
