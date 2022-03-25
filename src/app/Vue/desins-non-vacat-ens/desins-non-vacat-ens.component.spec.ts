import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesinsNonVacatEnsComponent } from './desins-non-vacat-ens.component';

describe('DesinsNonVacatEnsComponent', () => {
  let component: DesinsNonVacatEnsComponent;
  let fixture: ComponentFixture<DesinsNonVacatEnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesinsNonVacatEnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesinsNonVacatEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
