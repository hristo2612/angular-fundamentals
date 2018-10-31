import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ProductService } from './product.service';

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

  constructor(private _productService: ProductService) { 
    this.pageTitle = '<--- Product List --->';
  }

  onRatingClicked(event): void {
    this.message = 'The rating ' + event + ' was clicked';
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.products = this._productService.getProducts();
  }

}
