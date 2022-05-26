import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignementsParEnseignantVueAdminComponent } from './enseignements-par-enseignant-vue-admin.component';

describe('EnseignementsParEnseignantVueAdminComponent', () => {
  let component: EnseignementsParEnseignantVueAdminComponent;
  let fixture: ComponentFixture<EnseignementsParEnseignantVueAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignementsParEnseignantVueAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignementsParEnseignantVueAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
