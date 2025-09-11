import { Injectable } from '@angular/core'
import { TranslocoService } from '@jsverse/transloco'

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly storageKey = 'preferredLanguage'

  constructor(private transloco: TranslocoService) {}

  switchLanguage (language: string) {
    console.log('Log from language.service.ts - Switching language to:', language)

    this.transloco.setActiveLang(language)

    localStorage.setItem(this.storageKey, language)
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
