import { item } from './models/item';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { cart } from './models/cart';
import { Product } from './models/app-product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  
 // private sourceItems=new BehaviorSubject<item>(null) ;
  //$=this.sourceItems.asObservable();


  constructor( private afStore:AngularFirestore, private  authService:AuthService) {}

  // changeItems(items:item[]){
  //   this.sourceItems.next(items.)
  // }

   AddToCart(product:item){
    return  this.afStore
    .collection('/users/'+this.authService.userId+'/cart/')
    .add(product);
 
   }
 
    getItem(productId:string){
      return this.afStore.doc<item>('users/'+this.authService.userId+'/cart/'+productId).snapshotChanges();
    }
  

    changeQuantity(productId:string, item:item, change:number){
    
        return this.afStore.doc<item>('/users/'+this.authService.userId+'/cart/'+productId).update({
           quantity: item.quantity + change
        })
     
      }

  totalCount(items:item[]){
  let count=0
  for(let productId in items){
   count+= items[productId].quantity
   return count
 }
  }

  
getTotalPrice(items:item[]){
  let sum=0
  for(let productId in items){
  sum+= items[productId].quantity* items[productId].price;
  }
  return sum;
}

 getCart (){ 
    return  this.afStore.collection<item>('/users/'+this.authService.userId+'/cart').snapshotChanges();
  }
  
  clearCart( productId:string){
    return this.afStore.doc('/users/'+this.authService.userId+'/cart/'+ productId).delete();
  }

 }
    
    
