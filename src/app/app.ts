import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { Navigation } from "./components/shared/navigation/navigation"
import { Footer } from "./components/shared/footer/footer"
import { LanguageService } from './core/services/language.service'
import { ProgressSpinner } from 'primeng/progressspinner'
import { LoadingService } from './core/services/loading.service'
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, Footer, ProgressSpinner, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  constructor(private languageService: LanguageService, public loadingService: LoadingService) {}

  ngOnInit (): void {
    this.languageService.initializeLanguage()
  }

}
