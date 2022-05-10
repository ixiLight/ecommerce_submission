import { MyOrderService } from './../my-order.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { Router} from '@angular/router';
import { Order } from '../order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // items: any;
  item: Product[] = [];
  public cart: Product[] = [];
  public order: Order[] = [];
  public products: Product[] = [];

  items = this.cartService.getItems();
  myOrder = this.myOrderService.getPurchasedItems();

  public addPurchase: Order = {
    id: 0,
    orderCode: '',
    orderNumber: '',
    productCount: 0,
    status: '',
    totalCost: 0,
    productId: 0,
    quantity: 0,
    price: 0
  };

  public addOrder: Order = {
    id: 0,
    orderCode: '',
    orderNumber: '',
    productCount: 0,
    status: '',
    totalCost: 0,
    productId: 0,
    quantity: 0,
    price: 0
  };

  constructor(
    private cartService: CartService,
    private router: Router,
    private myOrderService: MyOrderService,
  ) { }
  
  ngOnInit(): void {

  }

  // N: Order (angular.io)
  isPurchase(purchase: any) {
    this.myOrderService.isPurchase(purchase);
    window.alert('Successfully Purchased!');
    
  }

  public onOpenModal(purchase: Order, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      this.addPurchase = purchase;
      button.setAttribute('data-target', '#addPurchaseModal');
    }

    container?.appendChild(button);
    button.click();
    
  }

  sendProductsToOrderDetails(product: Product) {
    this.cartService.sendProductsToOrderDetails(product);
    console.log("Purchased")
  }

  // public onAddPurchase(addForm: NgForm): void {
  //   document.getElementById('add-product-form')!.click();
  //   this.orderService.addProduct(addForm.value).subscribe(
  //     (response: Product) => {
  //       console.log(response);
  //       this.getProducts();
  //       addForm.reset();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //       addForm.reset();
  //     }
  //   )
  // }

}