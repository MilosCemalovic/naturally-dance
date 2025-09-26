import { Injectable, OnDestroy } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService implements OnDestroy {
  private mobileViewSubject = new BehaviorSubject<boolean>(false)

  public mobileViewChanges$ = this.mobileViewSubject.asObservable()

  private mobileWidth = window.innerWidth <= 900

  private resizeListener!: () => void

  constructor() {
    this.initializeResponsiveListening()
  }

  private checkScreensSize () {
    this.mobileViewSubject.next(this.mobileWidth)
  }

  private initializeResponsiveListening () {
    this.checkScreensSize()
    this.setupResizeListener()
  }

  private setupResizeListener () {
    this.resizeListener = () => this.checkScreensSize()
    window.addEventListener('resize', this.resizeListener)
  }

  get isScreenMobile (): boolean {
    return this.mobileWidth
  }

  ngOnDestroy (): void {
    this.resizeListener && window.removeEventListener('resize', this.resizeListener)
    this.mobileViewSubject.complete()
  }
}
