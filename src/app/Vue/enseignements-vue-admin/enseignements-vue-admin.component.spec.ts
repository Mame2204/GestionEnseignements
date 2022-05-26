import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignementsVueAdminComponent } from './enseignements-vue-admin.component';

describe('EnseignementsVueAdminComponent', () => {
  let component: EnseignementsVueAdminComponent;
  let fixture: ComponentFixture<EnseignementsVueAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignementsVueAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignementsVueAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
