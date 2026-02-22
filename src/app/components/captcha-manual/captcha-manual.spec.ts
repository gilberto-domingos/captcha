import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptchaManual } from './captcha-manual';

describe('CaptchaManual', () => {
  let component: CaptchaManual;
  let fixture: ComponentFixture<CaptchaManual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptchaManual]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptchaManual);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
