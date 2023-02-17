import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTravellerComponent } from './create-traveller/create-traveller.component';
import { TravellersComponent } from './travellers/travellers.component';

const routes: Routes = [
  {
    path: '',
    children : [
      { path:  'travellers-list', component: TravellersComponent },
      { path: 'create-travellers', component: CreateTravellerComponent},
      { path: '**', component: CreateTravellerComponent}
    ],
  },
  { path: '**', component: CreateTravellerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
