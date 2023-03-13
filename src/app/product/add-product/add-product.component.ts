import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private fb:FormBuilder,private ps:ProductserviceService,private router:Router){}
  addProductForm=this.fb.group({
    id: [''],
    productName: [''],
    category: [''],
    description: [''],
    price: [''],
    isAvailable: [''],
    productImage: ['']
  })
 addNewProduct(){

  let newProductData={
    
    id:this.addProductForm.value.id,
    productName:this.addProductForm.value.productName,
    category:this.addProductForm.value.category,
    description:this.addProductForm.value.description,
    price: this.addProductForm.value.price,
    isAvailable:this.addProductForm.value.isAvailable,
    productImage:this.addProductForm.value.productImage


  }
  this.ps.addProduct(newProductData).subscribe((item:any)=>{
    alert('product added successfully')
    this.router.navigateByUrl('product')

  })



 }
}
