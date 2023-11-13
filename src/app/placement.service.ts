import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacementService {

  API='http://localhost:8082'
  constructor(private http: HttpClient) { }

  public registerPlacement(PlacementData:any){
    return this.http.post(this.API+'/registerPlacement',PlacementData)
  }

  public getPlacement(){
    return this.http.get(this.API+'/getPlacement');
  }

  public deletePlacement(stdrollno:any){
    return this.http.delete(this.API+'/deletePlacement?stdrollno=' + stdrollno);
  }


  public updatePlacement(placement:any){
    return this.http.put(this.API+'/updatePlacement',placement);
  }
}
