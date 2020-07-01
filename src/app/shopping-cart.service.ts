import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Product } from './models/app-product';
import { take } from 'rxjs/operators';
import { observable, Observable } from 'rxjs';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { 
 
  }

 private create(){
  return   this.db.list('/shopping-carts').push({
    dateCreated: new Date().getTime()

    
    });

  }

async getCart (){
    let cartId= await this.getOrCreateCart();
    return  this.db.object('/shopping-carts/'+ cartId).valueChanges();
  }

private getItem(cartId:string,productId:string){
 return  this.db.object('/shopping-carts/'+cartId+'/items/'+productId);

}

  private async getOrCreateCart(){
    let cartId=localStorage.getItem('cartId');
    if (cartId) return cartId
   else {
     let result = await this.create();
     localStorage.setItem('cartId',result.key);
    return result.key;
     }
  }
  async addToCart(product:Product) {
   
  let cartId= await this.getOrCreateCart();
  
 let item$ =this.getItem(cartId,product.key) ;

    item$.snapshotChanges().pipe(take(1)).subscribe(item =>{
      item$.update({product:product, quantity : 0+1 })


    })
  }
  }


