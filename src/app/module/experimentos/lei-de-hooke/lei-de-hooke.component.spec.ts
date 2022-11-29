import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeiDeHookeComponent } from './lei-de-hooke.component';

describe('LeiDeHookeComponent', () => {
  let component: LeiDeHookeComponent;
  let fixture: ComponentFixture<LeiDeHookeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeiDeHookeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeiDeHookeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
