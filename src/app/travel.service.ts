import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl(''),
    email: new FormControl(''),
    place: new FormControl(''),
    noOfTravellers: new FormControl(0),
  })

  createTraveller(body:any){
    let headers = new HttpHeaders();
    headers.append( 'Content-Type','application/json');
    return this.http.post("http://localhost:8010/traveller/createTraveller",body,{headers : headers});
  }

  getAllTravellers(){
    let headers = new HttpHeaders();
    headers.append( 'Content-Type','application/json');
    return this.http.get("http://localhost:8010/traveller/getAllTravellers",{headers : headers});
  }
}
