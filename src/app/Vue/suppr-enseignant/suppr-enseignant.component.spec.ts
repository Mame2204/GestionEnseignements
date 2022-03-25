import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprEnseignantComponent } from './suppr-enseignant.component';

describe('SupprEnseignantComponent', () => {
  let component: SupprEnseignantComponent;
  let fixture: ComponentFixture<SupprEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
