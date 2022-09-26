import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandDeleteComponent } from './components/brand-delete/brand-delete.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDeleteComponent } from './components/car-delete/car-delete.component';
import { CarDetailScreenComponent } from './components/car-detail-screen/car-detail-screen.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorDeleteComponent } from './components/color-delete/color-delete.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';

const routes: Routes = 
[
  {path:"",pathMatch:"full",component:  CarComponent},
  {path:"cars",component:  CarComponent},
  {path:"cars/brand/:brandId",component:  CarComponent},
  {path:"cars/color/:colorId",component:  CarComponent},
  {path:"cars/car-detail-screen/:carId",component:  CarDetailScreenComponent},
  {path:"cars/add",component:CarAddComponent},
  {path:"brands/add",component:BrandAddComponent},
  {path:"colors/add",component:ColorAddComponent},
  {path:"colors-update",component:ColorUpdateComponent},
  {path:"brands-update",component:BrandUpdateComponent},
  {path:"cars-update",component:CarUpdateComponent},
  {path:"cars-delete",component:CarDeleteComponent},
  {path:"colors-delete",component:ColorDeleteComponent},
  {path:"brands-delete",component:BrandDeleteComponent},
  



   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
