import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTravellerComponent } from './create-traveller.component';

describe('CreateTravellerComponent', () => {
  let component: CreateTravellerComponent;
  let fixture: ComponentFixture<CreateTravellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTravellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTravellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
