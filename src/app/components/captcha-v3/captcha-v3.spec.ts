import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptchaV3 } from './captcha-v3';

describe('CaptchaV3', () => {
  let component: CaptchaV3;
  let fixture: ComponentFixture<CaptchaV3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptchaV3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptchaV3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
