import { CommonModule } from '@angular/common'
import { Component, OnDestroy, OnInit, } from '@angular/core'
import { TranslocoModule, TranslocoService } from '@jsverse/transloco'
import { MenubarModule } from 'primeng/menubar'
import { LanguageSwitcher } from "../language-switcher/language-switcher"
import { startWith, Subscription } from 'rxjs'
import { Router } from '@angular/router'

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MenubarModule, CommonModule, TranslocoModule, LanguageSwitcher],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class Navigation implements OnInit, OnDestroy {
  items: any[] = []

  private langChangeSubscription: Subscription | null = null
  private translationLoadSubscription: Subscription | null = null

  constructor(private transloco: TranslocoService, private router: Router) {}

  ngOnInit (): void {
    // Initial translation of navigation items
    this.updateNavigationItems()

    // Subscribe to language changes to update navigation items dynamically
    this.langChangeSubscription = this.transloco.langChanges$.pipe(
      startWith(this.transloco.getActiveLang()) // Include current language immediately
    ).subscribe(() => {
      this.updateNavigationItems() // Re-translates navigation when language changes
    })

    // Subscribe to translation load events to update navigation items when new translations are loaded
    this.translationLoadSubscription = this.transloco.events$.subscribe((event) => {
      if (event.type === 'translationLoadSuccess') {
        this.updateNavigationItems() // Re-translates navigation when new translations are loaded
      }
    })
  }

  updateNavigationItems () {
    setTimeout(() => {
      this.items = [
        { label: this.transloco.translate('navigation.home'), icon: 'pi pi-home', routerLink: '/' },
        { label: this.transloco.translate('navigation.about'), icon: 'pi pi-info-circle', routerLink: '/about' },
        { label: this.transloco.translate('navigation.projects'), icon: 'pi pi-trophy', routerLink: '/projects' }
      ]
    }, 50)
  }

  navigateToHome () {
    this.router.navigate(['/'])
  }

  ngOnDestroy (): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe()
    }

    if (this.translationLoadSubscription) {
      this.translationLoadSubscription.unsubscribe()
    }
  }

}
