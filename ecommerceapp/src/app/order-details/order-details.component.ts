import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Order } from '../order';
import { MyOrderService } from '../my-order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  public orders: Order[] = []; 

  myOrder = this.myOrderService.getPurchasedItems();

  constructor(
    private myOrderService: MyOrderService,

    ) { }

    
  ngOnInit(): void {
  }

}
