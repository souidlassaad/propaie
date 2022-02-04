import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroitdComponent } from './droitd.component';

describe('DroitdComponent', () => {
  let component: DroitdComponent;
  let fixture: ComponentFixture<DroitdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroitdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DroitdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
