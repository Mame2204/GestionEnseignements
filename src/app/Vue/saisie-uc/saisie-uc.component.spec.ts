import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieUCComponent } from './saisie-uc.component';

describe('SaisieUCComponent', () => {
  let component: SaisieUCComponent;
  let fixture: ComponentFixture<SaisieUCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisieUCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieUCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
