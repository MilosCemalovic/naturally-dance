import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { Navigation } from "./components/shared/navigation/navigation"
import { Footer } from "./components/shared/footer/footer"
import { TranslocoService } from '@jsverse/transloco'
import { LanguageService } from './core/services/language.service'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  constructor(private transloco: TranslocoService, private languageService: LanguageService) {}

  ngOnInit (): void {
    this.languageService.initializeLanguage()

    // Debugging: Log language translation
    this.transloco.selectTranslate('navigation.home').subscribe((translation) => {
      console.log('Translation for "navigation.home":', translation)
    })
  }
}
