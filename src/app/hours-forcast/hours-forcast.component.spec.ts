import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursForcastComponent } from './hours-forcast.component';

describe('HoursForcastComponent', () => {
  let component: HoursForcastComponent;
  let fixture: ComponentFixture<HoursForcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoursForcastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursForcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
