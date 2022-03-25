import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsEnsParAdminComponent } from './ins-ens-par-admin.component';

describe('InsEnsParAdminComponent', () => {
  let component: InsEnsParAdminComponent;
  let fixture: ComponentFixture<InsEnsParAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsEnsParAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsEnsParAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
