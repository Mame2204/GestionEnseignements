import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEnseignementsComponent } from './gestion-enseignements.component';

describe('GestionEnseignementsComponent', () => {
  let component: GestionEnseignementsComponent;
  let fixture: ComponentFixture<GestionEnseignementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionEnseignementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEnseignementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
