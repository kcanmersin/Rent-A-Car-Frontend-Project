import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentService } from './payment.service';
import { RouterService } from './router.service';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44329/api/";
  constructor(private httpClient: HttpClient,  
    private paymentService: PaymentService, private routerService: RouterService) { }

  
    
}
