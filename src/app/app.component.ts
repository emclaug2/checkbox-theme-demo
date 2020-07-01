import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  themeControl = new FormControl();
  themes: string[] = ['blue (default)', 'green', 'yellow', 'purple', 'brand-pine'];
}
