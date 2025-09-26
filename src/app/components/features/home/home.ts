import { TranslocoModule } from '@jsverse/transloco'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { AsyncPipe, CommonModule } from '@angular/common'
import { CardModule } from 'primeng/card'
import { Observable, Subscription } from 'rxjs'
import { Header } from "../../shared/header/header"
import { DanceDataService } from '../../../core/services/dance-data.service'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, CommonModule, TranslocoModule, CardModule, AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit, OnDestroy {
  dances$: Observable<any>
  private subscription: Subscription | null = null

  constructor(private danceDataService: DanceDataService) {
    this.dances$ = this.danceDataService.dances$
  }

  ngOnInit (): void {
    setTimeout(() => {
      this.subscription = this.danceDataService.loadDances().subscribe()
    }, 1000)
  }

  ngOnDestroy () {
    this.subscription && this.subscription.unsubscribe()
  }
}
