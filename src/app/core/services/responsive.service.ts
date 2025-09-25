import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  private isMobileSubject = new BehaviorSubject<boolean>(false)

  public isMobile$ = this.isMobileSubject.asObservable()

  constructor() {
    this.checkScreensSize()
    window.addEventListener('resize', () => this.checkScreensSize())
  }

  private checkScreensSize () {
    this.isMobileSubject.next(window.innerWidth <= 900)
  }

  get isMobile (): boolean {
    return window.innerWidth <= 900
  }
}
