export interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  socialLinks: SocialLink[]
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
  label: string
}

export const PROJECTS: Project[] = [
  {
    id: 'discoParty',
    title: 'discoParty.title',
    description: 'discoParty.description',
    imageUrl: 'assets/images/disco-party.jpg',
    socialLinks: [
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/bgdiskozurka',
        icon: 'pi pi-facebook',
        label: 'Facebook'
      },
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/bgdiskozurka',
        icon: 'pi pi-instagram',
        label: 'Instagram'
      }
    ]
  },
  {
    id: 'kizomba',
    title: 'kizomba.title',
    description: 'kizomba.description',
    imageUrl: 'assets/images/kizomba-flashmob.jpg',
    socialLinks: [
      {
        platform: 'youtube',
        url: 'https://www.youtube.com/watch?v=ImpqgbvjO84',
        icon: 'pi pi-youtube',
        label: 'YouTube'
      }
    ]
  },
  {
    id: 'kizombaBanjaLuka',
    title: 'kizombaBanjaLuka.title',
    description: 'kizombaBanjaLuka.description',
    imageUrl: 'assets/images/kizomba-banja-luka.jpg',
    socialLinks: [
      {
        platform: 'youtube',
        url: 'https://www.youtube.com/watch?v=bCNhwwV3Ubw',
        icon: 'pi pi-youtube',
        label: 'YouTube'
      },
      {
        platform: 'youtube',
        url: 'https://www.youtube.com/watch?v=7ZnKA5pp0N0',
        icon: 'pi pi-youtube',
        label: 'YouTube'
      }
    ]
  }
  // Add other projects: workshops, parties, etc.
]