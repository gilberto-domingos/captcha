import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home').then((m) => m.Home),
  },
  {
    path: 'home',
    loadComponent: () => import('./components/home/home').then((m) => m.Home),
  },
  {
    path: 'captchaV3',
    loadComponent: () => import('./components/captcha-v3/captcha-v3').then((m) => m.CaptchaV3),
  },
  {
    path: 'captchaV2',
    loadComponent: () => import('./components/captcha-v2/captcha-v2').then((m) => m.CaptchaV2),
  },
];
