import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private colorService:ColorService,
    private toastrService:ToastrService,

  ) { }
  colors: Color[] = [];
  colorUpdateForm: FormGroup;
  currentColor:Color
  ngOnInit(): void {
    this.getColors();
    this.createColorUpdateForm();
  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      
    });
  }
  createColorUpdateForm() {
    this.colorUpdateForm = this.formBuilder.group({
      colorId: [''],
      colorName: ['', Validators.required],
    });
  }

  updateColor() {
    if (this.colorUpdateForm.valid) {
      let colorModel = Object.assign({}, this.colorUpdateForm.value);
      console.log(colorModel.colorId)
   
      this.colorService.update(colorModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'güncellendi');
        },
        (responseError) => {
          this.toastrService.error('güncellenemedi');
        }
      );
    }
  }
  setCurrentColor(color:Color)
  {
    this.currentColor=color;
    console.log(this.currentColor.colorName)
    this.colorUpdateForm.patchValue({
      colorId: this.currentColor.colorId,
    });
  }


}
