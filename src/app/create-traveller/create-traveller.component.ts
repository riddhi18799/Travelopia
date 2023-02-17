import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-create-traveller',
  templateUrl: './create-traveller.component.html',
  styleUrls: ['./create-traveller.component.scss']
})
export class CreateTravellerComponent {
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    place: new FormControl('', Validators.required),
    noOfTravellers: new FormControl(0,[Validators.required, Validators.pattern("^[0-9]*$")]),
    budgetPerPerson: new FormControl(0, Validators.pattern("^[0-9]*$"))
  })
  places= [
  "India",
  "Africa",
  "Europe",
  "Dubai"
  ]
  constructor(private service: TravelService, private router: Router, private toastr: ToastrService){

  }
  submit(){
    console.log(this.form);
    let body = {
      name : this.form.controls['name'].value,
      noOfTravellers : Number(this.form.controls['noOfTravellers'].value),
      place: this.form.controls['place'].value,
      email : this.form.controls['email'].value,
      budgetPerPerson: Number(this.form.controls['budgetPerPerson'].value),
    }
    this.service.createTraveller(body).subscribe((res)=>{
      if(res){
        this.clear();
        this.toastr.success("Traveller Created!", "Success Message",  {
          titleClass: "center",
          messageClass: "center"
        })
      }
    })
  }
  clear(){
    this.form.reset();
    this.form.controls['name'].setValue(' ');
    this.form.controls['place'].setValue(' ');  
    this.form.controls['email'].setValue(' ');
    this.form.controls['budgetPerPerson'].setValue(0);
    this.form.controls['noOfTravellers'].setValue(0);
  }

  showAll(){
    this.router.navigateByUrl('/travellers-list');
  }
}
