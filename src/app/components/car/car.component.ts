import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import {HttpClient} from '@angular/common/http'
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  constructor(
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private toasterService:ToastrService
  ) { }
  currentCar:Car|null;
  cars:Car[]=[];
  carsDetails:Car[]=[];
  dataLoaded=false;
  filterText=""
  
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
  }
}
