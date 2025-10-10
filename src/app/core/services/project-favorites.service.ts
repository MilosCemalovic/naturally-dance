import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ProjectFavoritesService {
  private readonly FAVORITES_KEY = 'favoriteProjects';

  // Save favorites to localStorage
  saveFavorites (favorites: Record<string, boolean>) {
    try {
      localStorage.setItem(this.FAVORITES_KEY, JSON.stringify(favorites))
    } catch (error) {
      console.error('Error saving favorites to localStorage: ', error)
    }
  }

  // Load favorites from localStorage
  loadFavorites (): Record<string, boolean> {
    try {
      const stored = localStorage.getItem(this.FAVORITES_KEY)
      return stored ? JSON.parse(stored) : {}
    } catch (error) {
      console.error('Error loading favorites to localStorage:', error)
      return {}
    }
  }

  // Clear all favorites from localStorage
  clearFavorites () {
    try {
      localStorage.removeItem(this.FAVORITES_KEY)
    } catch (error) {
      console.error('Error clearing favorites to localStorage:', error)
    }
  }

}
