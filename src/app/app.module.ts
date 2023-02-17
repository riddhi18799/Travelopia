import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravellersComponent } from './travellers/travellers.component';
import { CreateTravellerComponent } from './create-traveller/create-traveller.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TravelService } from './travel.service';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import  {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    TravellersComponent,
    CreateTravellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    ToastrModule.forRoot({
      positionClass :'toast-top-right'
    })
  ],
  providers: [TravelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
