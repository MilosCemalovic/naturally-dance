import { Injectable, OnDestroy } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService implements OnDestroy {
  private mobileViewSubject = new BehaviorSubject<boolean>(false)

  public mobileViewChanges$ = this.mobileViewSubject.asObservable()

  private resizeListener!: () => void // Add exclamation mark tell TypeScript we'll initialize it

  constructor() {
    this.initializeResponsiveListening()
  }

  private checkScreensSize () {
    const isMobile = window.innerWidth <= 900
    this.mobileViewSubject.next(isMobile)
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
    return this.mobileViewSubject.value
  }

  ngOnDestroy (): void {
    this.resizeListener && window.removeEventListener('resize', this.resizeListener)
    this.mobileViewSubject.complete()
  }
}
