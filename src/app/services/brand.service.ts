import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(
    private httpClient:HttpClient
  ) { }
  apiUrl="https://localhost:44329/api/";

  getBrands():Observable<ListResponseModel<Brand>>
  {
    let newPatht =this.apiUrl+"brands/getall"
    return this.httpClient
    .get<ListResponseModel<Brand>>(newPatht);
  }

  add(brand:Brand):Observable<ResponseModel>
  {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"brands/add",brand);
 
  }
  update(brand:Brand):Observable<ResponseModel>
  {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"brands/update",brand);
 
  }
  delete(brand:Brand):Observable<ResponseModel>
  {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"brands/delete",brand);
 
  }

}
