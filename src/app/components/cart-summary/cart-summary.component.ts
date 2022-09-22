import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor(
    private cartService:CartService,
    private toastrService:ToastrService
    
  ) { }
  cartItems:CartItem[]=[];

  ngOnInit(): void {
    this.getCart();
  }

  getCart()
  {
    this.cartItems=this.cartService.list();
  }
  removeFromCart(car:Car)
  {
      this.cartService.removeFromCart(car);
      this.toastrService.error("Deleted",car.carName);
  }
}
