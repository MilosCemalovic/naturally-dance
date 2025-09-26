import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  private isMobileSubject = new BehaviorSubject<boolean>(false)

  public isMobile$ = this.isMobileSubject.asObservable()

  private mobileWidth = window.innerWidth <= 900

  constructor() {
    this.checkScreensSize()
    window.addEventListener('resize', () => this.checkScreensSize())
  }

  private checkScreensSize () {
    this.isMobileSubject.next(this.mobileWidth)
  }

  get isMobile (): boolean {
    return this.mobileWidth
  }
}
