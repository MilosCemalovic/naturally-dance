import { CommonModule } from '@angular/common'
import { Component, } from '@angular/core'
import { TranslocoModule, TranslocoService } from '@jsverse/transloco'
import { MenubarModule } from 'primeng/menubar'

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MenubarModule, CommonModule, TranslocoModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class Navigation {
  items: any[] = []

  constructor(private transloco: TranslocoService) {
    // Translations are preloaded, so this should work fine
    this.items = [
      { label: this.transloco.translate('navigation.home'), icon: 'pi pi-home' },
      { label: this.transloco.translate('navigation.about'), icon: 'pi pi-info-circle' },
      { label: this.transloco.translate('navigation.projects'), icon: 'pi pi-trophy' }
    ]
  }

}
