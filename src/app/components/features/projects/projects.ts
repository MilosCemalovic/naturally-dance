import { Component, effect, OnInit, signal } from '@angular/core'
import { ProjectCard } from './project-card/project-card'
import { Project, PROJECTS } from '../../../models/projectsData'
import { ProjectFavoritesService } from '../../../core/services/project-favorites.service'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnInit {
  projects = signal<Project[]>(PROJECTS)

  // Signal to track favorite states for all projects
  favoriteProjects = signal<Record<string, boolean>>({})

  constructor(private projectFavorites: ProjectFavoritesService) {
    // Auto-save favorites whenever they change
    effect(() => {
      const favorites = this.favoriteProjects()

      if (Object.keys(favorites).length > 0) {
        this.projectFavorites.saveFavorites(favorites)
        console.log('Favorites saved:', favorites) // Debug log
      }
    })
  }

  ngOnInit (): void {
    // Load saved favorites on component initialization
    const savedFavorites = this.projectFavorites.loadFavorites()
    console.log('Favorites loaded:', savedFavorites) // Debug log
    this.favoriteProjects.set(savedFavorites)
  }

  updateFavorite (projectId: string, isFavorite: boolean) {
    this.favoriteProjects.update((current) => ({
      ...current,
      [projectId]: isFavorite
    }))
  }

  // Clear all favorites
  clearAllFavorites () {
    this.favoriteProjects.set({})
    this.projectFavorites.clearFavorites()
  }
}
