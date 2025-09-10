import { TranslocoModule } from '@jsverse/transloco'
import { Component, OnInit } from '@angular/core'
import { AsyncPipe, CommonModule } from '@angular/common'
import { CardModule } from 'primeng/card'
import { Observable } from 'rxjs'
import { Header } from "../../shared/header/header"
import { DanceDataService } from '../../../core/services/dance-data.service'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, CommonModule, TranslocoModule, CardModule, AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  dances$: Observable<any>

  constructor(private danceDataService: DanceDataService) {
    this.dances$ = this.danceDataService.dances$
  }

  ngOnInit (): void {
    this.danceDataService.loadDances().subscribe()
  }
}
