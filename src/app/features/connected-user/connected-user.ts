import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStateStore } from '../../shared/appSate/app-state-store';

@Component({
  selector: 'app-connected-user',
  imports: [CommonModule],
  templateUrl: './connected-user.html'
})
export class ConnectedUser {
  protected readonly store = inject(AppStateStore);
}
