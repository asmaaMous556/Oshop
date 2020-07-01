import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/app-product';
import { switchMap } from 'rxjs/operators';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {
products:Product[];
FilteredProducts: Product[] ;
 category:string;
  cart: any;
  subscribtion:Subscription;

  constructor( route :ActivatedRoute,
  productService : ProductService, 
  private cartService: ShoppingCartService) {
    
   
    productService.getAll().pipe(switchMap(products=>{
      this.products=products;
      return route.queryParamMap
      
    })).subscribe(params=>{
      this.category=params.get('category')
    

      
      this.FilteredProducts=(this.category) ?
      this.products.filter(p=>p.category===this.category) : //if we have a catched category we will call filter method
      this.products
    });
  
   }
    async ngOnInit(){
   this.subscribtion= (await this.cartService.getCart()) .subscribe(cart=>this.cart)
   }

 ngOnDestroy(){
   this.subscribtion.unsubscribe();
 }

  }
