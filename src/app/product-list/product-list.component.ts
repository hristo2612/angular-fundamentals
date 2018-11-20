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
  listFilter: string = '';
  message: string = '';
  todos: any = [];

  constructor(private _productService: ProductService) { 
    this.pageTitle = 'Welcome';
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
    this._productService.getProducts().subscribe((data) => {
      if (typeof data === 'string') {
        console.log('SOMETHING WENT WROOOOOONG');
      } else {
      this.products = data;
      }

    });
  }

}
