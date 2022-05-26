import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifCompteEnseignantComponent } from './modif-compte-enseignant.component';

describe('ModifCompteEnseignantComponent', () => {
  let component: ModifCompteEnseignantComponent;
  let fixture: ComponentFixture<ModifCompteEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifCompteEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifCompteEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
