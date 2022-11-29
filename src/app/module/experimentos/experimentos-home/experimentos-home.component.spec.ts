import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentosHomeComponent } from './experimentos-home.component';

describe('ExperimentosHomeComponent', () => {
  let component: ExperimentosHomeComponent;
  let fixture: ComponentFixture<ExperimentosHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperimentosHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperimentosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
