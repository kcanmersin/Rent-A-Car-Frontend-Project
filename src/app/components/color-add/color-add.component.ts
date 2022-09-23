import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private colorService:ColorService,
    private toastrService:ToastrService,
  ) { }
  colorAddForm :FormGroup

  ngOnInit(): void {
    this.createCarAddForm();
    
  

  }

  createCarAddForm()
  {
    this.colorAddForm=this.formBuilder.group
    ({
      colorName:["",Validators.required],
    })
  }
  add()
  {
    if(this.colorAddForm.valid)
    {
      let carModel =Object.assign({},this.colorAddForm.value)
      this.colorService.add(carModel).subscribe(response=>
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
