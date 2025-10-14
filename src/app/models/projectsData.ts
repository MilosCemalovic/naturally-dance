export interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  imageSrcSet: string
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
    imageSrcSet: `
    assets/images/disco-party-400.jpg 400w,
    assets/images/disco-party-800.jpg 800w,
    assets/images/disco-party-1200.jpg 1200w
  `,
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
    imageSrcSet: `
    assets/images/kizomba-flashmob.jpg 400w,
    assets/images/kizomba-flashmob.jpg 800w,
    assets/images/kizomba-flashmob.jpg 1200w
  `,
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
    imageSrcSet: `
    assets/images/kizomba-banja-luka.jpg 400w,
    assets/images/kizomba-banja-luka.jpg 800w,
    assets/images/kizomba-banja-luka.jpg 1200w
  `,
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
  },
  {
    id: 'newYearParties',
    title: 'newYearParties.title',
    description: 'newYearParties.description',
    imageUrl: 'assets/images/new-year-dance-parties.jpg',
    imageSrcSet: `
    assets/images/new-year-dance-parties-400.jpg 400w,
    assets/images/new-year-dance-parties-800.jpg 800w,
    assets/images/new-year-dance-parties-1200.jpg 1200w
  `,
    socialLinks: [
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/media/set/?set=a.309874499511979&type=3',
        icon: 'pi pi-facebook',
        label: 'Facebook'
      },
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/media/set/?set=a.2243893099244507&type=3',
        icon: 'pi pi-facebook',
        label: 'Facebook'
      },
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/media/set/?set=a.176343196198444&type=3',
        icon: 'pi pi-facebook',
        label: 'Facebook'
      },
    ]
  },
  {
    id: 'danceWorkshops',
    title: 'danceWorkshops.title',
    description: 'danceWorkshops.description',
    imageUrl: 'assets/images/dance-workshops.jpg',
    imageSrcSet: `
    assets/images/dance-workshops-400.jpg 400w,
    assets/images/dance-workshops-800.jpg 800w,
    assets/images/dance-workshops-1200.jpg 1200w
  `,
    socialLinks: [
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/naturallydance/photos_albums',
        icon: 'pi pi-facebook',
        label: 'Facebook'
      },
    ]
  },
  {
    id: 'danceClasses',
    title: 'danceClasses.title',
    description: 'danceClasses.description',
    imageUrl: 'assets/images/dance-classes.jpg',
    imageSrcSet: `
    assets/images/dance-classes-400.jpg 400w,
    assets/images/dance-classes-800.jpg 800w,
    assets/images/dance-classes-1200.jpg 1200w
  `,
    socialLinks: [
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/naturallydance/photos_albums',
        icon: 'pi pi-facebook',
        label: 'Facebook'
      },
    ]
  },
  // Add other projects: workshops, parties, etc.
]