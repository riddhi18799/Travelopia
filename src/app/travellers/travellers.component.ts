import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-travellers',
  templateUrl: './travellers.component.html',
  styleUrls: ['./travellers.component.scss']
})
export class TravellersComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ['id', 'name', 'email', 'place','noOfTravellers', 'budgetPerPerson'];
  constructor(private service: TravelService, private router : Router){

  }
  ngOnInit(): void {
    this.service.getAllTravellers().subscribe((res)=>{
      this.dataSource = res;
    })
  }

  addData(){
    this.router.navigateByUrl('/create-travellers')
  }

  removeData(){

  }
}
