import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppWeb';

  constructor(
    private router: Router,
  ) {}

  projectsAll() {
    this.router.navigate(['/projects']);
  }
  home() {
    this.router.navigate(['/home']);
  }
  contact() {
    this.router.navigate(['/contact']);
  }
}
