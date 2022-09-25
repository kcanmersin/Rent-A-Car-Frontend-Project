import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  
  constructor(
    private formBuilder:FormBuilder,
    private brandService:BrandService,
    private toastrService:ToastrService,

  ) { }
  brands: Brand[] = [];
  brandUpdateForm: FormGroup;
  currentBrand:Brand
  ngOnInit(): void {
    this.getBrands();
    this.createBrandUpdateForm();
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      
    });
  }
  createBrandUpdateForm() {
    this.brandUpdateForm = this.formBuilder.group({
      brandId: [''],
      brandName: ['', Validators.required],
    });
  }

  updateBrand() {
    if (this.brandUpdateForm.valid) {
      let brandModel = Object.assign({}, this.brandUpdateForm.value);
   
      this.brandService.update(brandModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'güncellendi');
        },
        (responseError) => {
          this.toastrService.error('güncellenemedi');
        }
      );
    }
  }
  setCurrentBrand(brand:Brand)
  {
    this.currentBrand=brand;
    this.brandUpdateForm.patchValue({
      brandId: this.currentBrand.brandId,
    });
  }


}
