import { Component,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  @Input() text?: string;
constructor(public serviceobj: MyserviceService, public router:Router, public location:Location, private route: ActivatedRoute){}

items: any[] = [];
dataSource:any[] = [];
selectedProduct: any;
displayedColumns: string[] = ['id', 'Name', 'Desc', 'Price', 'Image'];


ngOnInit(): void {
  // this.route.queryParams.subscribe(params => {
  //   this.text = params['text'];
  // });
  this.serviceobj.getproductdata().subscribe(data => {
    this.items = data;
    this.dataSource = this.items;
    console.log(this.dataSource)
  }, err => {
    console.log('Unable to fetch Data');
  })
}
Addtocart(data:any){
    
  console.log(data)
  this.serviceobj.addcart(data).subscribe(res => {
    console.log(res);
    alert('Items Added Sucessfully');
    
  }, err => {
    console.log('Unable to add Items');
  })
}
getProductDetails(productId: number) {
  this.serviceobj.getProductById(productId).subscribe(
    (data: any) => {
      this.selectedProduct = data;
      this.router.navigate(['productdetailss']);
    },
    (      error: any) => {
      console.error(error);
    }
  );
}
Logout()
{
  this.router.navigate(['/login']);
  this.location.replaceState('/');
}
Home(){
  this.router.navigate(['products']);
}
Cart(){
  this.router.navigate(['cart']);
}

}
