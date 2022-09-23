import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { NaviComponent } from './components/navi/navi.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalsComponent } from './components/rentals/rentals.component';
import { CarDetailScreenComponent } from './components/car-detail-screen/car-detail-screen.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { BrandfilterPipePipe } from './pipes/brandfilter-pipe.pipe';
import { ColorfilterPipePipe } from './pipes/colorfilter-pipe.pipe';
import { CarAddComponent } from './components/car-add/car-add.component';
@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    NaviComponent,
    ColorComponent,
    CustomerComponent,
    RentalsComponent,
    CarDetailScreenComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    BrandfilterPipePipe,
    ColorfilterPipePipe,
    CarAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(
      {
        positionClass:"toast-bottom-right"
      }
    ),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
