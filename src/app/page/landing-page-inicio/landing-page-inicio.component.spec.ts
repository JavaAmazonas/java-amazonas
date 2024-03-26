import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageInicioComponent } from './landing-page-inicio.component';

describe('LandingPageInicioComponent', () => {
  let component: LandingPageInicioComponent;
  let fixture: ComponentFixture<LandingPageInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageInicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingPageInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
