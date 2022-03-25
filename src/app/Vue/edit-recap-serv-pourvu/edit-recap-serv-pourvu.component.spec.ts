import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecapServPourvuComponent } from './edit-recap-serv-pourvu.component';

describe('EditRecapServPourvuComponent', () => {
  let component: EditRecapServPourvuComponent;
  let fixture: ComponentFixture<EditRecapServPourvuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRecapServPourvuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecapServPourvuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
