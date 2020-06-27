import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/app-product';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
products:Product[];
FilteredProducts: Product[] ;

 category:string;
  constructor( route :ActivatedRoute,
  productService : ProductService, 
  ) 
   {
    productService.getAll().pipe(switchMap(products=>{
      this.products=products;
      return route.queryParamMap
      
    })).subscribe(params=>{
      this.category=params.get('category')
    

   
    // .subscribe(products=>{
    //   this.products=products

      // route.paramMap.subscribe(param=>{
      //   this.category=param.get('category');
      
      this.FilteredProducts=(this.category) ?
      this.products.filter(p=>p.category===this.category) : //if we have a catched category we will call filter method
      this.products
    });
      
    

    


   
   }

 

  }
