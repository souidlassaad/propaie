import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocieteserviceComponent } from './societeservice.component';

describe('SocieteserviceComponent', () => {
  let component: SocieteserviceComponent;
  let fixture: ComponentFixture<SocieteserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocieteserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocieteserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
