import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

@Component({
  selector: 'app-captcha-v2',
  imports: [CommonModule, ReactiveFormsModule, RecaptchaModule],
  templateUrl: './captcha-v2.html',
  styleUrl: './captcha-v2.scss',
})
export class CaptchaV2 {
  private fb = inject(FormBuilder);
  siteKey = '6Lf-lXIsAAAAAIgPn-2Eg6vZNywBbx7thWNv8u1l';

  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    recaptcha: ['', Validators.required],
  });

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, password, recaptcha } = this.form.getRawValue();

    console.log('Form válido');
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Senha:', password);
    console.log('Token v2:', recaptcha);
  }

  onCaptchaResolved(token: string | null) {
    this.form.controls['recaptcha'].setValue(token || '');
    this.form.controls['recaptcha'].markAsTouched();
  }
}
