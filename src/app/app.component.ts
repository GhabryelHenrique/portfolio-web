import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header>
    <main class="container mt-5">
      <router-outlet></router-outlet>
    </main> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio-web';
}
