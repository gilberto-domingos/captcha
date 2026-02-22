import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecaptchaService } from './../../services/recaptcha-service';

@Component({
  selector: 'app-captcha-manual',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './captcha-manual.html',
  styleUrl: './captcha-manual.scss',
})
export class CaptchaManual {
  private fb = inject(FormBuilder);
  private recaptchaService = inject(RecaptchaService);

  readonly siteKey = '6Lf-lXIsAAAAAIgPn-2Eg6vZNywBbx7thWNv8u1l';

  form = this.fb.group({
    recaptcha: ['', Validators.required],
  });

  ngAfterViewInit(): void {
    const waitForRecaptcha = setInterval(() => {
      if (window['grecaptcha']) {
        clearInterval(waitForRecaptcha);

        this.recaptchaService.render('recaptcha-container', this.siteKey, (token: string) => {
          this.form.get('recaptcha')?.setValue(token);
        });
      }
    }, 300);
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('Form OK', this.form.value);

    // token pronto para backend
    const token = this.form.value.recaptcha;
    console.log('Recaptcha token:', token);
  }
}
