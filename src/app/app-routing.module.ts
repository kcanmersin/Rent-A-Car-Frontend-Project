import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailScreenComponent } from './components/car-detail-screen/car-detail-screen.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = 
[
  {path:"",pathMatch:"full",component:  CarComponent},
  {path:"cars",component:  CarComponent},
  {path:"cars/brand/:brandId",component:  CarComponent},
  {path:"cars/color/:colorId",component:  CarComponent},
  {path:"cars/car-detail-screen/:carId",component:  CarDetailScreenComponent},
  {path:"cars/add",component:CarAddComponent,canActivate:[LoginGuard]},
  {path:"brands/add",component:BrandAddComponent},
  {path:"colors/add",component:ColorAddComponent},
  {path:"colors-update",component:ColorUpdateComponent},
  {path:"brands-update",component:BrandUpdateComponent},
  {path:"cars-update",component:CarUpdateComponent},
  {path:"login",component:LoginComponent},
  {path:"payment",component:PaymentComponent}
  


   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
