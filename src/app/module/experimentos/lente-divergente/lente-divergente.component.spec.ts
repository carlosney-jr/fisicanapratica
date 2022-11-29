import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenteDivergenteComponent } from './lente-divergente.component';

describe('LenteDivergenteComponent', () => {
  let component: LenteDivergenteComponent;
  let fixture: ComponentFixture<LenteDivergenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenteDivergenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LenteDivergenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
