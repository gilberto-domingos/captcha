import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  public router = inject(Router);

  goToV3() {
    this.router.navigate(['/captchaV3']);
  }

  goToV2() {
    this.router.navigate(['/captchaV2']);
  }

  goToManual() {
    this.router.navigate(['/manual']);
  }
}
