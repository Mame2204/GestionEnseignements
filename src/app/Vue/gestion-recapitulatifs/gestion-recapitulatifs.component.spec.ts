import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRecapitulatifsComponent } from './gestion-recapitulatifs.component';

describe('GestionRecapitulatifsComponent', () => {
  let component: GestionRecapitulatifsComponent;
  let fixture: ComponentFixture<GestionRecapitulatifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionRecapitulatifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionRecapitulatifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
