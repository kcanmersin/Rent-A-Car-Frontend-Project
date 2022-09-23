import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';
@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private carService:CarService,
    private toastrService:ToastrService,

    

  ) { }
  carAddForm :FormGroup

  ngOnInit(): void {
    this.createCarAddForm();
    
  

  }

  createCarAddForm()
  {
    this.carAddForm=this.formBuilder.group
    ({
      carName:["",Validators.required],
      dailyPrice:["",Validators.required],
      unitsInStock:["",Validators.required],
      description:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      modelYear:["",Validators.required],

    })
  }
  add()
  {
    if(this.carAddForm.valid)
    {
      let carModel =Object.assign({},this.carAddForm.value)
      this.carService.add(carModel).subscribe(response=>
        {
        this.toastrService.success(response.message,"Success");
        }, responseError=>
        {
          if(responseError.errors.Errors.length>0)
          {
            for(let i=0;i<responseError.error.Errors.length;i++)
            {
            this.toastrService.
            error(responseError.errors.Errors[i].
            ErrorMessage,"Validation Error");
            } 
          }
        }
        );
    }else
    {
      this.toastrService.error("Car did not added!!","Error")
    }

  }

}
