import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import {HttpClient} from '@angular/common/http'
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  constructor(
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
  ) { }
  cars:Car[]=[];
  carsDetails:CarDetailDto[]=[];
  dataLoaded=false;
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>
      {
        if(params["brandId"])
        {
          this.getCarsByBrand(params["brandId"])
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

}
