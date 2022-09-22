import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailScreenComponent } from './components/car-detail-screen/car-detail-screen.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = 
[
  {path:"",pathMatch:"full",component:  CarComponent},
  {path:"cars",component:  CarComponent},
  {path:"cars/brand/:brandId",component:  CarComponent},
   {path:"cars/color/:colorId",component:  CarComponent},
   {path:"cars/car-detail-screen/:carId",component:  CarDetailScreenComponent},


   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
