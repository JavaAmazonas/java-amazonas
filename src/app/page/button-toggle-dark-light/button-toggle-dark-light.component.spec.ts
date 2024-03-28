import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggleDarkLightComponent } from './button-toggle-dark-light.component';

describe('ButtonToggleDarkLightComponent', () => {
  let component: ButtonToggleDarkLightComponent;
  let fixture: ComponentFixture<ButtonToggleDarkLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonToggleDarkLightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonToggleDarkLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
