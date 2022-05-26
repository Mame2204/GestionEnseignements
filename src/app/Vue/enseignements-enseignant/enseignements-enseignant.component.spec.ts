import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignementsEnseignantComponent } from './enseignements-enseignant.component';

describe('EnseignementsEnseignantComponent', () => {
  let component: EnseignementsEnseignantComponent;
  let fixture: ComponentFixture<EnseignementsEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignementsEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignementsEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
