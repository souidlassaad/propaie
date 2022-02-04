import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecationComponent } from './affecation.component';

describe('AffecationComponent', () => {
  let component: AffecationComponent;
  let fixture: ComponentFixture<AffecationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffecationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
