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

  constructor(private transloco: TranslocoService, private router: Router) {}

  ngOnInit (): void {
    this.langChangeSubscription = this.transloco.langChanges$.pipe(
      startWith(this.transloco.getActiveLang()) // Include current language immediately
    ).subscribe(() => {
      this.updateNavigationItems() // Re-translates navigation when language changes
    })
  }

  updateNavigationItems () {
    this.items = [
      { label: this.transloco.translate('navigation.home'), icon: 'pi pi-home', routerLink: '/' },
      { label: this.transloco.translate('navigation.about'), icon: 'pi pi-info-circle', routerLink: '/about' },
      { label: this.transloco.translate('navigation.projects'), icon: 'pi pi-trophy', routerLink: '/projects' }
    ]
  }

  navigateToHome () {
    this.router.navigate(['/'])
  }

  ngOnDestroy (): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe()
    }
  }

}
