import { Injectable } from '@angular/core';

declare const grecaptcha: any;

@Injectable({ providedIn: 'root' })
export class RecaptchaService {
  render(widgetId: string, siteKey: string, callback: (token: string) => void) {
    if (!window['grecaptcha']) return;

    grecaptcha.render(widgetId, {
      sitekey: siteKey,
      callback,
    });
  }

  reset(widgetId?: any) {
    if (!window['grecaptcha']) return;
    grecaptcha.reset(widgetId);
  }

  getResponse(widgetId?: any): string | null {
    if (!window['grecaptcha']) return null;
    return grecaptcha.getResponse(widgetId);
  }
}
