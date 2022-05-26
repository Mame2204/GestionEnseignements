import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapitulatifVueAdminComponent } from './recapitulatif-vue-admin.component';

describe('RecapitulatifVueAdminComponent', () => {
  let component: RecapitulatifVueAdminComponent;
  let fixture: ComponentFixture<RecapitulatifVueAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapitulatifVueAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapitulatifVueAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
