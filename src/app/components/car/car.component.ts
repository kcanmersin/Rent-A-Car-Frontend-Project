import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import {HttpClient} from '@angular/common/http'
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { Color } from 'src/app/models/color';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  constructor(
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private toasterService:ToastrService,
    private cartService:CartService,
    private brandService: BrandService,
    private colorService: ColorService,

  ) { }
  currentCar:Car|null;
  cars:Car[]=[];
  carsDetails:Car[]=[];
  dataLoaded=false;
  filterText=""
  brands: Brand[];
  colors: Color[];
  brandId: number = 0;
  colorId: number = 0;
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>
      {
        if(params["brandId"])
        {
          this.getCarsByBrand(params["brandId"])
        }else if(params["colorId"])
        {
          this.getCarsByColor(params["colorId"])
        }else
        {this.getAllCarsDetails()
        }
        this.getBrands();
        this.getColors();
      })
  }
  getAllCarsDetails() {
    this.carService.getAllCarsDetails().subscribe(response=>{
      this.carsDetails=response.data
      this.dataLoaded=true;
    })
  }
  getAllCars() {
    this.carService.getAllCars().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }
  getBrands() {
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
      this.dataLoaded=true;
    })
  }
  getColors() {
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data
      this.dataLoaded=true;
    })
  }
  getCarsByBrand(brandId:number)
  {
      this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.carsDetails=response.data;
      this.dataLoaded=true;
      })
  }
  getCarsByColor(colorId:number)
  {
      this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.carsDetails=response.data;
      this.dataLoaded=true;
      })
  }
  
  setCurrentCar(car:Car)
  {
    this.currentCar=car;

  }
  addToCart(car:Car)
  {
    this.toasterService.success("Added to cart",car.carName)
    this.cartService.addToCart(car);
  }
  getCarDetailsByColorAndBrandId(colorId:number,brandId:number) 
  {
    this.carService.getCarDetailsByColorAndBrandId(colorId,brandId).subscribe(response=>{
      this.carsDetails=response.data;
      this.dataLoaded=true;
      })
  }
  filter()
  {
    
    if(this.brandId!==0 && this.colorId!==0)
    {
      this.getCarDetailsByColorAndBrandId(this.colorId,this.brandId);
    }else if(this.brandId!==0)
    {
      this.getCarsByBrand(this.brandId);
      console.log(this.brandId)

    }else if(this.colorId!==0)
    {
      this.getCarsByColor(this.colorId);
    }
    this.toasterService.success("Cars Filtered")
  }


  
}
