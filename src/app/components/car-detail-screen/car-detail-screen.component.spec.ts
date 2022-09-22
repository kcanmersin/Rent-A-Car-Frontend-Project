import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailScreenComponent } from './car-detail-screen.component';

describe('CarDetailScreenComponent', () => {
  let component: CarDetailScreenComponent;
  let fixture: ComponentFixture<CarDetailScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDetailScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDetailScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
