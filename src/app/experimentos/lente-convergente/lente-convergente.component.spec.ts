import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenteConvergenteComponent } from './lente-convergente.component';

describe('LenteConvergenteComponent', () => {
  let component: LenteConvergenteComponent;
  let fixture: ComponentFixture<LenteConvergenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenteConvergenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LenteConvergenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
