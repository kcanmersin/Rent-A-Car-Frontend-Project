import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/carDetailDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(
    private httpClient:HttpClient
  ) { }
  apiUrl="https://localhost:44329/api/";

  getAllCars():Observable<ListResponseModel<Car>>{
    let newPath= this.apiUrl+"cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);    
  }
  getAllCarsDetails():Observable<ListResponseModel<CarDetailDto>>{
    let newPath= this.apiUrl+"cars/getallcarsdetails"
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);    
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetailDto>>
  {
    let newPatht =this.apiUrl+"cars/getallbybrandid?brandId="+brandId;
    return this.httpClient
    .get<ListResponseModel<CarDetailDto>>(newPatht);
  }
}
