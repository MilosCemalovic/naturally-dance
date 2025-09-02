import { Component, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { Navigation } from "./components/shared/navigation/navigation"
import { Footer } from "./components/shared/footer/footer"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
