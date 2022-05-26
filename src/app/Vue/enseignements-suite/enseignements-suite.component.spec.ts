import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignementsSuiteComponent } from './enseignements-suite.component';

describe('EnseignementsSuiteComponent', () => {
  let component: EnseignementsSuiteComponent;
  let fixture: ComponentFixture<EnseignementsSuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignementsSuiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignementsSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
