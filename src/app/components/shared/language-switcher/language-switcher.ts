import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { TranslocoService } from '@jsverse/transloco'
import { SelectModule } from 'primeng/select'
import { LanguageService } from '../../../core/services/language.service'

interface LanguageOption {
  label: string
  value: string
  countryCode: string
}

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [SelectModule, FormsModule, CommonModule],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss'
})
export class LanguageSwitcher {
  languages: LanguageOption[] = [
    { label: 'English', value: 'en', countryCode: 'gb' },
    { label: 'Srpski', value: 'rs', countryCode: 'rs' },
  ]

  selectedLanguage: LanguageOption

  constructor(private transloco: TranslocoService, private languageService: LanguageService) {
    const currentLanguage = this.transloco.getActiveLang()
    this.selectedLanguage = this.languages.find((lang) => lang.value === currentLanguage) || this.languages[0]
  }

  switchLanguage () {
    if (this.selectedLanguage) {
      this.languageService.switchLanguage(this.selectedLanguage.value)
    }
  }
}