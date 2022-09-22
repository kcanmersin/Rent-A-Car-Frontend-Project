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
  getAllCarsDetails():Observable<ListResponseModel<Car>>{
    let newPath= this.apiUrl+"cars/getallcarsdetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);    
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>
  {
    let newPatht =this.apiUrl+"cars/getallbybrandid?brandId="+brandId;
    return this.httpClient
    .get<ListResponseModel<Car>>(newPatht);
  }
  getCarsByColor(colorId:number)
  {
    let newPatht =this.apiUrl+"cars/getbycolorid?colorId="+colorId;
    return this.httpClient
    .get<ListResponseModel<Car>>(newPatht);
  }
  getCarDetails(carId:number) 
    {
      let newPatht =this.apiUrl+"cars/getcardetailbyid?carId="+carId;
      return this.httpClient
      .get<ListResponseModel<Car>>(newPatht);
   
    }
    getCarDetailsByBrandId(brandId:number) 
    {
      let newPatht =this.apiUrl+"cars/getcardetailbybrandId?brandId="+brandId;
      return this.httpClient
      .get<ListResponseModel<Car>>(newPatht);
   
    }
    getCarDetailsByColorId(colorId:number) 
    {
      let newPatht =this.apiUrl+"cars/getcardetailbycolorid?colorId="+colorId;
      return this.httpClient
      .get<ListResponseModel<Car>>(newPatht);
   
    }
    getCarDetailsByColorAndBrandId(colorId:number,brandId:number) 
    {
      let newPatht =this.apiUrl+"cars/getcardetailcolorandbrandid?colorId="+colorId+"&brandId="+brandId;
      return this.httpClient
      .get<ListResponseModel<Car>>(newPatht);
   
    }
}
