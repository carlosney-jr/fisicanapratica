import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestaoPDFComponent } from './questao-pdf.component';

describe('QuestaoPDFComponent', () => {
  let component: QuestaoPDFComponent;
  let fixture: ComponentFixture<QuestaoPDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestaoPDFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestaoPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
