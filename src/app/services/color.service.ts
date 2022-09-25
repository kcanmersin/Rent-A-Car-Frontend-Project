import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(
    private httpClient:HttpClient
  ) { }
  apiUrl="https://localhost:44329/api/";

  getColors():Observable<ListResponseModel<Color>>
  {
    let newPatht =this.apiUrl+"colors/getall"
    return this.httpClient
    .get<ListResponseModel<Color>>(newPatht);
  }
  add(color:Color):Observable<ResponseModel>
  {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"colors/add",color);
 
  }
  update(color:Color):Observable<ResponseModel>
  {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"colors/update",color);
 
  }
  delete(color:Color):Observable<ResponseModel>
  {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"colors/delete",color);
 
  }
}
