import { chapters } from './chapters'
import { allPraanaPhotos } from './praana'
import type { GalleryTag, Photo } from './types'

export const filters: { id: 'all' | GalleryTag; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'lectures', label: 'Lectures' },
  { id: 'activities', label: 'Class Activities' },
  { id: 'worksheets', label: 'Worksheets' },
  { id: 'group', label: 'Group Project' },
  { id: 'praana', label: 'Praana 2026' },
]

export const galleryPhotos: Photo[] = [
  ...chapters.flatMap((c) =>
    c.evidence.map((p) => ({ ...p, context: `Chapter ${c.num} · ${c.title}` })),
  ),
  ...allPraanaPhotos.map((p) => ({ ...p, context: 'Praana 2026 · Blood Donation Programme' })),
]
