import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProfessionnelComponent } from './info-professionnel.component';

describe('InfoProfessionnelComponent', () => {
  let component: InfoProfessionnelComponent;
  let fixture: ComponentFixture<InfoProfessionnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoProfessionnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoProfessionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
