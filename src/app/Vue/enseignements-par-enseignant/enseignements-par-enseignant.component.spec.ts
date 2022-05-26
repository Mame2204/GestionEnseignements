import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignementsParEnseignantComponent } from './enseignements-par-enseignant.component';

describe('EnseignementsParEnseignantComponent', () => {
  let component: EnseignementsParEnseignantComponent;
  let fixture: ComponentFixture<EnseignementsParEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignementsParEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignementsParEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
