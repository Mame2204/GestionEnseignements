import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsNonVacatEnsComponent } from './ins-non-vacat-ens.component';

describe('InsNonVacatEnsComponent', () => {
  let component: InsNonVacatEnsComponent;
  let fixture: ComponentFixture<InsNonVacatEnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsNonVacatEnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsNonVacatEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
