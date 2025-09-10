import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, catchError, map, Observable, of, tap, throwError } from 'rxjs'

interface DanceStyle {
  id: number
  name: string
  category: string
  descriptionKey: string
}

@Injectable({
  providedIn: 'root'
})
export class DanceDataService {
  private danceSubject = new BehaviorSubject<DanceStyle[]>([])
  public dances$ = this.danceSubject.asObservable()

  // If we are using API in the future, we can replace staticDances with apiUrl and HttpClient
  private apiUrl = 'https://api.example.com/dances'

  constructor(private http: HttpClient) {}

  loadDances () {
    const staticDances: DanceStyle[] = [
      {
        id: 1,
        name: 'dancesList.samba.name',
        category: 'dancesList.samba.category',
        descriptionKey: 'dancesList.samba.description'
      },
      {
        id: 2,
        name: 'dancesList.rumba.name',
        category: 'dancesList.rumba.category',
        descriptionKey: 'dancesList.rumba.description'
      },
      {
        id: 3,
        name: 'dancesList.chaChaCha.name',
        category: 'dancesList.chaChaCha.category',
        descriptionKey: 'dancesList.chaChaCha.description'
      },
      {
        id: 4,
        name: 'dancesList.jive.name',
        category: 'dancesList.jive.category',
        descriptionKey: 'dancesList.jive.description'
      },
      {
        id: 5,
        name: 'dancesList.englishWaltz.name',
        category: 'dancesList.englishWaltz.category',
        descriptionKey: 'dancesList.englishWaltz.description'
      },
      {
        id: 6,
        name: 'dancesList.vienneseWaltz.name',
        category: 'dancesList.vienneseWaltz.category',
        descriptionKey: 'dancesList.vienneseWaltz.description'
      },
      {
        id: 7,
        name: 'dancesList.foxtrot.name',
        category: 'dancesList.foxtrot.category',
        descriptionKey: 'dancesList.foxtrot.description'
      },
      {
        id: 8,
        name: 'dancesList.salsa.name',
        category: 'dancesList.salsa.category',
        descriptionKey: 'dancesList.salsa.description'
      },
      {
        id: 9,
        name: 'dancesList.bachata.name',
        category: 'dancesList.bachata.category',
        descriptionKey: 'dancesList.bachata.description'
      },
      {
        id: 10,
        name: 'dancesList.merengue.name',
        category: 'dancesList.merengue.category',
        descriptionKey: 'dancesList.merengue.description'
      },
      {
        id: 11,
        name: 'dancesList.kizomba.name',
        category: 'dancesList.kizomba.category',
        descriptionKey: 'dancesList.kizomba.description'
      },
      {
        id: 12,
        name: 'dancesList.blues.name',
        category: 'dancesList.blues.category',
        descriptionKey: 'dancesList.blues.description'
      },
      {
        id: 13,
        name: 'dancesList.disco.name',
        category: 'dancesList.disco.category',
        descriptionKey: 'dancesList.disco.description'
      },
      {
        id: 14,
        name: 'dancesList.rnr.name',
        category: 'dancesList.rnr.category',
        descriptionKey: 'dancesList.rnr.description'
      },
      {
        id: 15,
        name: 'dancesList.sirtaki.name',
        category: 'dancesList.sirtaki.category',
        descriptionKey: 'dancesList.sirtaki.description'
      }
    ]

    // For API call instead of static data, uncomment the following lines and comment out 'return of(staticDances)' part below
    // Simulating an API call
    // return this.http.get<DanceStyle[]>(this.apiUrl).pipe(
    //   tap(dances => {
    //     console.log('Fetched dances from API:', dances)
    //     this.danceSubject.next(dances)
    //   }),
    //   catchError(error => {
    //     console.error('Error fetching dances from API:', error)
    //     const fallbackDances = staticDances
    //     this.danceSubject.next(fallbackDances)

    //     return throwError(() => new Error('Failed to load dances from API, using static data'))
    //   })
    // )

    // For static data without API
    return of(staticDances).pipe(
      tap(dances => this.danceSubject.next(dances)),
      catchError(error => {
        console.error('Error loading dance styles:', error)
        return of([])
      })
    )
  }

  getDanceById (id: number): Observable<DanceStyle | undefined> {
    return this.dances$.pipe(
      map(dances => dances.find(dance => dance.id === id))
    )
  }

  getDanceByCategory (category: string): Observable<DanceStyle[] | undefined> {
    return this.dances$.pipe(
      map(dances => dances.filter(dance => dance.category.toLowerCase() === category.toLocaleLowerCase()))
    )
  }
}
