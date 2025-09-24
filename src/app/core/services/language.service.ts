import { Injectable } from '@angular/core'
import { TranslocoService } from '@jsverse/transloco'
import { LoadingService } from './loading.service'

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly storageKey = 'preferredLanguage'

  constructor(private transloco: TranslocoService, private loadingService: LoadingService) {}

  switchLanguage (language: string) {
    // Set the loading spinner
    this.loadingService.show()

    setTimeout(() => {
      try {
        console.log('Log from language.service.ts - Switching language to:', language)

        this.transloco.setActiveLang(language)
        localStorage.setItem(this.storageKey, language)
      } catch (error) {
        console.log('Failed to switch language: ', error)
      } finally {
        this.loadingService.hide()
      }
    }, 100)
  }

  getCurrentLanguage (): string {
    return this.transloco.getActiveLang()
  }

  initializeLanguage () {
    const savedLanguage = localStorage.getItem(this.storageKey)

    if (savedLanguage && this.transloco.isLang(savedLanguage)) {
      this.transloco.setActiveLang(savedLanguage)
    }
  }
}
