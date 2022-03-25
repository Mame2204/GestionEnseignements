import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesinsEnsParAdminComponent } from './desins-ens-par-admin.component';

describe('DesinsEnsParAdminComponent', () => {
  let component: DesinsEnsParAdminComponent;
  let fixture: ComponentFixture<DesinsEnsParAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesinsEnsParAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesinsEnsParAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
