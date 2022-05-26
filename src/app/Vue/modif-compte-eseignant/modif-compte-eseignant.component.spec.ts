import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifCompteEseignantComponent } from './modif-compte-eseignant.component';

describe('ModifCompteEseignantComponent', () => {
  let component: ModifCompteEseignantComponent;
  let fixture: ComponentFixture<ModifCompteEseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifCompteEseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifCompteEseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
