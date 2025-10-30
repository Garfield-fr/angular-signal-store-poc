import { computed, inject } from "@angular/core";
import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { firstValueFrom } from "rxjs";
import { AppStateApi } from "./app-state-api";
import { Settings } from "./model/settings.model";
import { User } from "./model/user.model";

export type AppState = {
  user: Partial<User>,
  settings: Settings,
  isConnected: boolean
};

const initialAppState: AppState = {
  user: {},
  settings: {
    availableLanguages: ["fr"],
    currentLanguage: "fr",
  },
  isConnected: false
}

export const AppStateStore = signalStore(
  { providedIn: 'root' },
  withState<AppState>(initialAppState),
  withComputed((store) => ({
    isConnected: computed(() => 'id' in store.user())
  })),
  withMethods((store, appStateApi = inject(AppStateApi)) => ({
    async loadSettings() {
      const settings = await firstValueFrom(appStateApi.getSettings());
      patchState(store, { user: {}, settings });
    },
    login(user: User) {
      patchState(store, { user })
    },
    logout() {
      patchState(store, { user: {}})
    }
  }))
);
