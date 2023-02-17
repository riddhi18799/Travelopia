import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellersComponent } from './travellers.component';

describe('TravellersComponent', () => {
  let component: TravellersComponent;
  let fixture: ComponentFixture<TravellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravellersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
