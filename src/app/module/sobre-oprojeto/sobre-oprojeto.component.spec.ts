import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreOProjetoComponent } from './sobre-oprojeto.component';

describe('SobreOProjetoComponent', () => {
  let component: SobreOProjetoComponent;
  let fixture: ComponentFixture<SobreOProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreOProjetoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreOProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
