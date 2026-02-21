import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptchaV2 } from './captcha-v2';

describe('CaptchaV2', () => {
  let component: CaptchaV2;
  let fixture: ComponentFixture<CaptchaV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptchaV2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptchaV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
