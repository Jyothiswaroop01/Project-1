import { Component, EventEmitter, Input } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items: any[] = [];
  message:string = "";
  
  constructor(public serviceobj:MyserviceService, public router:Router, public location:Location) { }
  productClick(){
    this.router.navigate(['product']);
  }
  cartClick(){
    this.router.navigate(['cart']);
  }
  ngOnInit(): void {
    console.log("Cart ngOnInit is called");
    this.serviceobj.getcartdata().subscribe(data => {
      this.items = data;
      if(this.items.length == 0){
        this.message = "😢😢Sorry their are no products in the cart😢😢"
      }
    });
  }
  removeClick(id:any):void{
    
    this.serviceobj.removecart(id).subscribe(res=>{
      this.ngOnInit();
      alert('Data Deleted Sucessfully');
    },err=>{
      alert('unable to delete the record');
    })
  }
  Logout(){
    this.router.navigate(['/login']);
    this.location.replaceState('/');
  }
  Home(){
    this.router.navigate(['products']);
  }
  Cart(){
    this.router.navigate(['cart']);
  }
  ngOnDestroy(){
    console.log("Cart Destroy is called");
  }
}
function Output(): (target: CartComponent, propertyKey: "notify") => void {
  throw new Error('Function not implemented.');
}

