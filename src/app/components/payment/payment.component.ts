import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { CarDetailScreenComponent } from '../car-detail-screen/car-detail-screen.component';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
  ) {}

  payForm :FormGroup
  ngOnInit() {
  }
  createPayForm()
  {
    this.payForm=this.formBuilder.group
    ({
      FullName:["",Validators.required],
      CardNumber:["",Validators.required],
      ExpirationMonth:["",Validators.required],
      ExpirationYear:["",Validators.required],
      CVV:["",Validators.required],
    })
  }
}
