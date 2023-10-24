import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-slider-images-buttons',
  templateUrl: './slider-images-buttons.component.html',
  styleUrls: ['./slider-images-buttons.component.css']
})
export class SliderImagesButtonsComponent {

  images:string[]=[
    'assets/Images/1.jpg',
    'assets/Images/2.jpg',
    'assets/Images/3.jpg',
    'assets/Images/4.jpg',
    'assets/Images/5.jpg'
  ]
  counter:number=0;
  Time:any;
  currentImage:string=this.images[this.counter];

  Next(){
    
   this.counter++;
   if(this.counter >= this.images.length)
   this.counter=0;
   this.currentImage=this.images[this.counter];

  }

  Prev(){
    
    this.counter--;
    if(this.counter <= 0)
    this.counter=0;
    this.currentImage=this.images[this.counter];

  }

  Stop(){
    clearInterval(this.Time);
    this.currentImage=this.images[this.counter++];
  }

   
  Start(){
    this.Time=setInterval(()=>{
      this.counter++;
      
      if(this.counter >= this.images.length)
      {
        this.counter=-1;
      }
      // this.counter++;
      else{
        this.currentImage=this.images[this.counter];
      }
      if(this.counter == 0){
        this.counter++;
      }
         },2000);
        }  

        FormItem:string="";
        ArrToList:string[]=[]
        AddToList(){
          this.ArrToList.push(this.FormItem)
          console.log(this.ArrToList)
        }

        Delete(num:number){
          this.ArrToList.splice(num,1)
        }


}
