import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }
  apiUrl="https://localhost:44329/api/payments";

  getPayments():Observable<ListResponseModel<Payment>>
  {
    let newPatht =this.apiUrl+"/getall"
    return this.httpClient
    .get<ListResponseModel<Color>>(newPatht);
  }
  add(color:Color):Observable<ResponseModel>
  {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"colors/add",color);
 
  }
}
