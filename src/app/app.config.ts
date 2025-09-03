import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, isDevMode, APP_INITIALIZER, provideAppInitializer, inject } from '@angular/core'
import { provideRouter } from '@angular/router'
import { provideHttpClient } from '@angular/common/http'
import { provideTransloco, TranslocoService } from '@jsverse/transloco'
import Aura from '@primeuix/themes/aura'
import { providePrimeNG } from 'primeng/config'
import { lastValueFrom } from 'rxjs'
import { TranslocoHttpLoader } from './transloco-loader'
import { routes } from './app.routes'

// Factory function for initializing Transloco
export function initializeTransloco () {
  const translocoService = inject(TranslocoService)
  return lastValueFrom(translocoService.load('en'))
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    providePrimeNG({
      inputVariant: 'filled',
      ripple: true,
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'system',
          cssLayer: false
        }
      }
    }),
    provideTransloco({
      config: {
        availableLangs: ['en', 'rs'],
        defaultLang: 'en',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
        // Add missing handler to prevent translation key display instead of translation value
        missingHandler: {
          useFallbackTranslation: true,
          logMissingKey: false
        }
      },
      loader: TranslocoHttpLoader,
    }),
    provideAppInitializer(initializeTransloco)
  ]
}
