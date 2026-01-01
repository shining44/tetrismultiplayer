export type Locale = 'fa' | 'en'

export interface LocaleParams {
  params: Promise<{ locale: Locale }>
}

export interface Translation {
  nav: {
    home: string
    about: string
    products: string
    projects: string
    certifications: string
    contact: string
  }
  hero: {
    title: string
    subtitle: string
    description: string
    cta: string
    stats: {
      projects: string
      experience: string
      partners: string
      area: string
    }
  }
  about: {
    title: string
    subtitle: string
    history: string
    mission: string
    vision: string
    values: {
      title: string
      items: string[]
    }
  }
  products: {
    title: string
    subtitle: string
    categories: {
      chillers: {
        title: string
        description: string
      }
      ahu: {
        title: string
        description: string
      }
      fancoil: {
        title: string
        description: string
      }
      rooftop: {
        title: string
        description: string
      }
      ductsplit: {
        title: string
        description: string
      }
      coolingtower: {
        title: string
        description: string
      }
    }
  }
  projects: {
    title: string
    subtitle: string
    categories: {
      all: string
      commercial: string
      industrial: string
      healthcare: string
      hospitality: string
      educational: string
      residential: string
    }
  }
  certifications: {
    title: string
    subtitle: string
    partners: string
  }
  contact: {
    title: string
    subtitle: string
    form: {
      name: string
      email: string
      phone: string
      subject: string
      message: string
      submit: string
    }
    info: {
      address: string
      phone: string
      fax: string
      email: string
    }
  }
  footer: {
    description: string
    quickLinks: string
    services: string
    contact: string
    copyright: string
  }
}
