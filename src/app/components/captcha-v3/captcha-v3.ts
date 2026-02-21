import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

declare const grecaptcha: any;

@Component({
  selector: 'app-captcha-v3',
  imports: [CommonModule, MatButtonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './captcha-v3.html',
  styleUrl: './captcha-v3.scss',
})
export class CaptchaV3 {
  siteKey = '6LeLeHIsAAAAAARvn4rf0l79qHHDe5QF8bT5nSul';

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    if (!grecaptcha) {
      console.error('reCAPTCHA não carregado');
      return;
    }

    grecaptcha.ready(() => {
      grecaptcha
        .execute(this.siteKey, { action: 'submit' })
        .then((token: string) => {
          console.log('Token gerado:', token);
          alert('Token gerado! Confira o console.');
        })
        .catch((err: any) => {
          console.error('Erro no reCAPTCHA:', err);
        });
    });
  }
}
