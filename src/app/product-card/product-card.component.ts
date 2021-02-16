
import { Observable } from 'rxjs';

import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/app-product';
import { ShoppingCartService } from '../shopping-cart.service';
import { cart } from '../models/cart';
import { item } from '../models/item';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  implements OnInit{
@Input ('product') product: item;

item:item;
items: item[];
key:string

  constructor( private cartService:ShoppingCartService,private cart:cart) { }
  ngOnInit() {
 // this.getCart();
}

getCart(){
 
}

AddToCart(){
     this.product.quantity=1;
     this.cartService.AddToCart(this.product);
    
 }

  //   }
  // }



  // this.cartService.getCart().subscribe(items=>{
  //   this.items=items.map(item=>{
  //     return {
  //       key:item.payload.doc.id,
  //       imageUrl:item.payload.doc.data()['imageUrl'],
  //       price:item.payload.doc.data()['price'],
  //       title: item.payload.doc.data()['title'],
  //       quantity:item.payload.doc.data()['quantity'],
  //       totalPrice:item.payload.doc.data()['totalPrice']
  //     }
  //   })
  //  // console.log(this.items);
  //   for(let productId in this.items){
     
  //   //  console.log(this.items[productId].key)
  //   //  console.log(this.product.key)
  //     if(this.product.key==this.items[productId].key)
  //     {
  //       console.log(this.product.key)
  //      // this.cartService.changeQuantity(this.product.key,this.product,+1)
  //     }
  //   }
  // })
 
  // //console.log(this.items)
  
  // //    else{
}