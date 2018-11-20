import { Injectable } from "@angular/core";
import { IProduct } from "../models/product.model";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ProductService {
    private _productsUrl = './api/products/products.json';

    constructor(private _http: HttpClient) {
    }

    getProducts(): Observable<string | IProduct[]> {
      return this._http.get<IProduct[]>(this._productsUrl).pipe(
        tap((data) => { console.log('Myyy precious data is ', data) }),
        catchError((error) => { return Observable.throw(error) })
      );
    }
}