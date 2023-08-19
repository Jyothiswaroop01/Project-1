import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

constructor(public serviceobj: MyserviceService, public router:Router, public location:Location){}

items: any[] = [];
dataSource:any[] = [];
selectedProduct: any;
displayedColumns: string[] = ['id', 'Name', 'Desc', 'Price', 'Image'];

ngOnInit(): void {
  this.serviceobj.getproductdata().subscribe(data => {
    this.items = data;
    this.dataSource = this.items;
    console.log(this.dataSource)
  });
}
Addtocart(data:any){
    
  console.log(data)
  this.serviceobj.addcart(data).subscribe(res => {
    console.log(res);
    alert('Items Added Sucessfully');
    
  }, err => {

  })
}
getProductDetails(productId: number) {
  this.serviceobj.getProductById(productId).subscribe(
    (data: any) => {
      this.selectedProduct = data;
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
  this.router.navigate(['dashboard']);
}
Cart(){
  this.router.navigate(['cart']);
}

}