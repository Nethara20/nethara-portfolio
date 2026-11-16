export type GalleryTag = 'lectures' | 'activities' | 'worksheets' | 'group' | 'praana'

export type Photo = {
  /** Path inside /public. */
  src: string
  alt: string
  caption: string
  /** Natural pixel size, used to reserve space and keep true proportions. */
  w: number
  h: number
  tags: GalleryTag[]
  /** Optional CSS object-position for cropped tiles. */
  focus?: string
  /** Where the photo belongs, shown in the gallery viewer. */
  context?: string
}

export type Block = { title: string; text?: string; items?: string[] }

export type Chapter = {
  n: number
  /** Two-digit number used in URLs and labels, such as "03". */
  num: string
  title: string
  /** One or two sentences for the journey card. */
  summary: string
  status: string
  statusNote?: string
  facilitator?: string
  skills: string[]
  overview: string[]
  keyLearnings: Block[]
  activities: Block[]
  learned: string[]
  application: { verdict: string; text: string[] }
  evidence: Photo[]
  /** Photo used on the journey card. */
  cover: number
}
