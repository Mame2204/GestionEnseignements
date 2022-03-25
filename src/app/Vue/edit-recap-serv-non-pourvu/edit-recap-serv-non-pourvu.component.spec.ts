import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecapServNonPourvuComponent } from './edit-recap-serv-non-pourvu.component';

describe('EditRecapServNonPourvuComponent', () => {
  let component: EditRecapServNonPourvuComponent;
  let fixture: ComponentFixture<EditRecapServNonPourvuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRecapServNonPourvuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecapServNonPourvuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
