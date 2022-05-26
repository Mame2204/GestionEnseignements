import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionVueAdminComponent } from './inscription-vue-admin.component';

describe('InscriptionVueAdminComponent', () => {
  let component: InscriptionVueAdminComponent;
  let fixture: ComponentFixture<InscriptionVueAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionVueAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionVueAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
