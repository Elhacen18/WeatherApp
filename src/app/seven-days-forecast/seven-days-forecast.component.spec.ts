import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenDaysForecastComponent } from './seven-days-forecast.component';

describe('SevenDaysForecastComponent', () => {
  let component: SevenDaysForecastComponent;
  let fixture: ComponentFixture<SevenDaysForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevenDaysForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenDaysForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
