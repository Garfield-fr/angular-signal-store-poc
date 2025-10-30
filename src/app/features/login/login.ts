import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonDirective } from "primeng/button";
import { AppStateApi } from '../../shared/appSate/app-state-api';
import { AppStateStore } from '../../shared/appSate/app-state-store';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ButtonDirective, RouterLink],
  templateUrl: './login.html',
})
export default class Login {
  protected store = inject(AppStateStore);
  protected appStateApi = inject(AppStateApi);
  private router = inject(Router);

  login = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  handleSubmit() {
    const user = this.appStateApi.getUser();
    const usernameControl = this.login.get('username');

    if (user.username !== usernameControl?.value) {
      usernameControl?.setErrors({
        loginNotFound: 'Erreur de login'
      });
    } else {
      this.store.login(user);
      this.router.navigate(['/']);
    }
  }
}
