import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorqueComponent } from './torque.component';

describe('TorqueComponent', () => {
  let component: TorqueComponent;
  let fixture: ComponentFixture<TorqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
