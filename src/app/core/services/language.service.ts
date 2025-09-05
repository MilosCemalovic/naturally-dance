import { Injectable } from '@angular/core'
import { TranslocoService } from '@jsverse/transloco'
import { firstValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly storageKey = 'preferredLanguage'

  constructor(private transloco: TranslocoService) {}

  async switchLanguage (language: string) {
    console.log('Switching language to - log from language.service.ts:', language)

    // Load translations before activating the language
    await firstValueFrom(this.transloco.load(language))

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
