import { Component, input, output } from '@angular/core'
import { TranslocoModule } from '@jsverse/transloco'
import { ButtonModule } from 'primeng/button'
import { CardModule } from "primeng/card"
import { Project, SocialLink } from '../../../../models/projectsData'

@Component({
  selector: 'app-project-card',
  imports: [CardModule, ButtonModule, TranslocoModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {
  // Input for project data
  project = input.required<Project>()

  // Model for two-way binding of favorite state
  isFavorite = input<boolean>(false)
  isFavoriteChange = output<boolean>()

  openLink (event: Event, url: string) {
    event.preventDefault()
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  trackBy (index: number, item: SocialLink) {
    return `${ index }-${ item.platform }-${ item.url }`
  }

  getSamePlatformLinks (platform: string): SocialLink[] {
    return this.project().socialLinks.filter(link => link.platform === platform)
  }

  getPlatformLinkIndex (platformLinks: SocialLink[], currentLink: SocialLink): number {
    return platformLinks.indexOf(currentLink) + 1
  }

  // Toggle favorite state
  toggleFavorite () {
    const newValue = !this.isFavorite()
    this.isFavoriteChange.emit(newValue)
  }
}
