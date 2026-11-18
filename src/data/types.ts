export type Locale = 'zh' | 'en'
export type Localized = Record<Locale, string>
export type ProjectCategory = 'robotics' | 'embedded' | 'vision' | 'software'
export type Project = {
  slug: string
  title: Localized
  subtitle: Localized
  category: ProjectCategory
  year?: string
  featured?: boolean
  image?: string
  imageAlt?: Localized
  tags: string[]
  before?: Localized
  built?: Localized
  after?: Localized
  process?: Localized[]
  challenges?: Localized[]
  contribution?: Localized
  outcome?: Localized
  diagram?: string
  gallery?: string[]
  video?: string
  repo?: string
}
