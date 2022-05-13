import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignementsComponent } from './enseignements.component';

describe('EnseignementsComponent', () => {
  let component: EnseignementsComponent;
  let fixture: ComponentFixture<EnseignementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
