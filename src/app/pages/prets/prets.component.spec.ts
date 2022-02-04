import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PretsComponent } from './prets.component';

describe('PretsComponent', () => {
  let component: PretsComponent;
  let fixture: ComponentFixture<PretsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PretsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PretsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
