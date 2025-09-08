import { CommonModule } from '@angular/common'
import { Component, OnDestroy, OnInit, } from '@angular/core'
import { TranslocoModule, TranslocoService } from '@jsverse/transloco'
import { MenubarModule } from 'primeng/menubar'
import { LanguageSwitcher } from "../language-switcher/language-switcher"
import { startWith, Subscription } from 'rxjs'

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

  constructor(private transloco: TranslocoService) {}

  ngOnInit (): void {
    this.langChangeSubscription = this.transloco.langChanges$.pipe(
      startWith(this.transloco.getActiveLang())
    ).subscribe(() => {
      this.updateNavigationItems()
    })
  }

  updateNavigationItems () {
    this.items = [
      { label: this.transloco.translate('navigation.home'), icon: 'pi pi-home' },
      { label: this.transloco.translate('navigation.about'), icon: 'pi pi-info-circle' },
      { label: this.transloco.translate('navigation.projects'), icon: 'pi pi-trophy' }
    ]
  }

  ngOnDestroy (): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe()
    }
  }

}
