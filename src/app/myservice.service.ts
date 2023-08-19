import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private objhttp:HttpClient, public router:Router) {
    this.loadData();
   }

  url:any = 'http://localhost:3000/Data';
  url1:any = 'http://localhost:3000/Login';
  url2:any = 'http://localhost:3000/Cart';


  dataArray: any[] = [];

  private loadData() {
    this.objhttp.get<any[]>(this.url1).subscribe(
      (data) => {
        this.dataArray = data;
      },
      (error) => {
        console.error('Error loading data:', error);
      }
    );
  }
  login(email: string, password: string): boolean {
    console.log(email,password);
    const user = this.dataArray.find(u => u.email === email && u.password === password);
    if (user) {
      return true;
    }
    return false;
  }

  getproductdata()
  {
    return this.objhttp.get<any[]>(this.url);
  }

  addUser(user: any) : Observable<any> {
    console.log(user)
    return this.objhttp.post<any>(this.url1,user);
  }
  addcart(temp:any)
    {
        return this.objhttp.post<any>(this.url2,temp);
    }
    getProductById(id: number): Observable<any> {
      return this.objhttp.get(this.url+'/'+id);
    }
    getcartdata()
    {
      return this.objhttp.get<any[]>(this.url2);
    }
    removecart(id:any)
    {
        return this.objhttp.delete<any>(this.url2+'/' + id);
    }


}
