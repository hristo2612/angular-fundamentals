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
  loadingImages: boolean = true;
  products: IProduct[] | string;
  errorMessage: string;
  listFilter: string = '';
  message: string = '';
  todos: any = [];

  constructor(private _productService: ProductService) { 
  }

  onRatingClicked(event): void {
    this.message = 'The rating ' + event + ' was clicked';
  }

  onLoad(): void {
    this.loadingImages = false;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this._productService.getProducts().subscribe((products) => {
      this.products = products;
    },
    (error) => {
      this.errorMessage = error ? 'Could not retrieve Products, try again later..' : '';
    });
  }

}
