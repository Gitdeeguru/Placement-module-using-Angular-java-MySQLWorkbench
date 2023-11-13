import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlacementService } from './placement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'placement-module';

  PlacementDetails=null as any;
  placementToUpdate={
    stdrollno:"",
    stdname:"",
    stdemail:"",
    number:""
  }

  constructor(private PlacementService: PlacementService){
    this.getPlacementDetails();
  }
  
  register(registerForm:NgForm){
    this.PlacementService.registerPlacement(registerForm.value).subscribe(
      (resp)=>{
        console.log(resp);
        registerForm.reset();
        this.getPlacementDetails();
      },
      (err)=>{
        console.log(err);
      }
    );
  }
  
  getPlacementDetails(){
    this.PlacementService.getPlacement().subscribe(
      (resp)=>{
        console.log(resp);
        this.PlacementDetails=resp;
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  deletePlacement(placement:any){
    this.PlacementService.deletePlacement(placement.stdrollno).subscribe(
      (resp)=>{
        console.log(resp);
      },
      (err)=>{
        console.log(err);
      }
    );
  }


  edit(placement:any){
    this.placementToUpdate=placement;
  }


  updatePlacement(){
    this.PlacementService.updatePlacement(this.placementToUpdate).subscribe(
      (resp)=>{
        console.log(resp);
      },
    (err)=>{
      console.log(err);
    }
    );
  }
}




