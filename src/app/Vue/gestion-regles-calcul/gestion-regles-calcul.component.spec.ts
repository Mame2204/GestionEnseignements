import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionReglesCalculComponent } from './gestion-regles-calcul.component';

describe('GestionReglesCalculComponent', () => {
  let component: GestionReglesCalculComponent;
  let fixture: ComponentFixture<GestionReglesCalculComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionReglesCalculComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionReglesCalculComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
