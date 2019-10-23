import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDetailsTableComponent } from './hotel-details-table.component';

describe('HotelDetailsTableComponent', () => {
  let component: HotelDetailsTableComponent;
  let fixture: ComponentFixture<HotelDetailsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelDetailsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
