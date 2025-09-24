import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false)

  // This observable WILL be used in the app.ts and app.html component
  isLoading$ = this.isLoadingSubject.asObservable()

  show () {
    this.isLoadingSubject.next(true)
  }

  hide () {
    this.isLoadingSubject.next(false)
  }
}
