import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  search = new BehaviorSubject('')

  constructor(private http: HttpClient) { }

  // http request :to view all product
  viewAllProducts() {
    return this.http.get('http://localhost:3000/products')
  }
  addProduct(newproduct: any) {
    return this.http.post('http://localhost:3000/products', newproduct)

  }
  //api to get single product data
  viewproduct(id: any) {
    return this.http.get('http://localhost:3000/products/' + id)

  }
  //delete
  deleteProduct(id: any) {
    return this.http.delete('http://localhost:3000/products/' + id)
  }
  //update product
  updateProduct(id:any,data:any){
    return this.http.put('http://localhost:3000/products/'+id,data)
  }
}
