import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'cart', component:CartComponent},
  {path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'component', loadChildren: () => import('./component/component.module').then(m => m.ComponentModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
