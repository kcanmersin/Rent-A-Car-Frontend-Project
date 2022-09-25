import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {


  constructor(
    private formBuilder:FormBuilder,
    private carService:CarService,
    private toastrService:ToastrService,

  ) { }
  cars: Car[] = [];
  carUpdateForm: FormGroup;
  currentCar:Car
  ngOnInit(): void {
    this.getAllCarsDetails();
    this.createCarUpdateForm();
  }
  getAllCarsDetails() {
    this.carService.getAllCarsDetails().subscribe((response) => {
      this.cars = response.data;
      
    });
  }
  createCarUpdateForm() {
    this.carUpdateForm = this.formBuilder.group({
      carId: [''],
      carName:["",Validators.required],
      dailyPrice:["",Validators.required],
      unitsInStock:["",Validators.required],
      description:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      modelYear:["",Validators.required],
    });
  }

  updateCar() {
    if (this.carUpdateForm.valid) {
      let carModel = Object.assign({}, this.carUpdateForm.value);
   
      this.carService.update(carModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'güncellendi');
        },
        (responseError) => {
          this.toastrService.error('güncellenemedi');
        }
      );
    }
  }
  setCurrentCar(car:Car)
  {
    this.currentCar=car;
    this.carUpdateForm.patchValue({
      carId: this.currentCar.carId,
    });
  }


}
