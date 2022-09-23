import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  constructor(
    private colorService:ColorService,

  ) { }
  colors:Color[]=[];
  dataLoaded=false
  currentColor:Color=null
    colorId:number
  ngOnInit(): void {
    this.getColors()
   
  }
  setCurrentColor(color:Color)
  {
    this.currentColor=color;

  }
  getColors()
  {
      this.colorService.getColors().subscribe(response=>{
      this.colors=response.data;
      this.dataLoaded=true;
      })
  }
  update(color:Color)
  { 
    this.colorService.update(color);

  }
}
