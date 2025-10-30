import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ButtonModule],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Home {
}
