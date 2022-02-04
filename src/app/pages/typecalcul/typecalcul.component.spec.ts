import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecalculComponent } from './typecalcul.component';

describe('TypecalculComponent', () => {
  let component: TypecalculComponent;
  let fixture: ComponentFixture<TypecalculComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypecalculComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypecalculComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
