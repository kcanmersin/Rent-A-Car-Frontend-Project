import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail-screen',
  templateUrl: './car-detail-screen.component.html',
  styleUrls: ['./car-detail-screen.component.css']
})
export class CarDetailScreenComponent implements OnInit {

  constructor(
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService,
  ) { }
  currentCar:Car|null;
  cars:Car[]=[];
  carImages:CarImage[]=[];
  carsDetails:Car[]=[];
  dataLoaded=false;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>
      {
    if(params["carId"])
        {
          this.getCarDetails(params["carId"])
          this.getCarImagesByCar(params["carId"])
        }
      })
  }


  getCarDetails(carId:number) {
    this.carService.getCarDetails(carId).subscribe(response=>{
      this.carsDetails=response.data
      this.dataLoaded=true;
    })
  }
  
  getCarImagesByCar(carId:number)
  {
    
    this.carImageService.getCarImagesByCar(carId).subscribe(response=>{
      this.carImages=response.data
      this.dataLoaded=true;
    })
  }
  
  /*
  getCarImagesByImgId(imageId:number)
  {
    
    this.carImageService.getCarImagesByImgId(imageId).subscribe(response=>{
      this.carImage=response.data
      this.dataLoaded=true;
    })
  }*/
}
