import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  productid: any
  productdata:any

  constructor(private ar: ActivatedRoute, private ps: ProductserviceService,private router:Router) { }

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.productid = data["id"]
    })
    this.ps.viewproduct(this.productid).subscribe((item:any)=>{
      this.productdata=item
    })

  }
  updateProduct(form:any){
    let updateProduct={
      id: form.value.id,
      productName:form.value.productName,
      category:form.value.category,
      description:form.value.description,
      price:form.value.price,
      isAvailable:form.value.isAvailable,
      productImage:form.value.productImage
    }
    this.ps.updateProduct(this.productid,this.productdata).subscribe((item:any)=>{
      alert('updated successfully')
      this.router.navigateByUrl('product')
    })
  }
  

}
