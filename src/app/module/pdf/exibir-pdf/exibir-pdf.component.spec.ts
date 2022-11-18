import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirPDFComponent } from './exibir-pdf.component';

describe('ExibirPDFComponent', () => {
  let component: ExibirPDFComponent;
  let fixture: ComponentFixture<ExibirPDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibirPDFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibirPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
