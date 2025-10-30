import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, TitleStrategy } from '@angular/router';
import Lara from '@primeuix/themes/lara';
import { MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { AppStateStore } from './shared/appSate/app-state-store';
import { PageTitleStrategy } from './shared/page-title-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideAppInitializer(() => {
      return inject(AppStateStore).loadSettings();
    }),
    providePrimeNG({
        ripple: true,
        theme: {
            preset: Lara
        }
    }),
    { provide: TitleStrategy, useClass: PageTitleStrategy },
    MessageService,
    AppStateStore
  ]
};
