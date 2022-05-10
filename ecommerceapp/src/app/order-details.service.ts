import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from './order';


@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  private apiServerUrl = environment.backendURL;
  myOrder: any;
  
  constructor(
    private http: HttpClient
  ) {}

  sendProductsToOrderDetails(productDetails: Product) :void {
    this.myOrder.push(productDetails);
  }
  
}
