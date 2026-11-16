import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { Lightbox, useLightbox } from '../components/Lightbox'
import { Eyebrow, PhotoButton, Reveal } from '../components/ui'
import { filters, galleryPhotos } from '../data/gallery'

type FilterId = (typeof filters)[number]['id']

export function GalleryPage() {
  const [filter, setFilter] = useState<FilterId>('all')
  const lb = useLightbox()

  const shown = useMemo(
    () => (filter === 'all' ? galleryPhotos : galleryPhotos.filter((p) => p.tags.includes(filter))),
    [filter],
  )
  const count = (id: FilterId) =>
    id === 'all' ? galleryPhotos.length : galleryPhotos.filter((p) => p.tags.includes(id)).length

  return (
    <div className="pt-[72px]">
      <header className="wrap pb-12 pt-12 sm:pt-16">
        <Reveal>
          <Eyebrow>Lectures, activities and Praana 2026</Eyebrow>
          <h1 className="display mt-6 text-[clamp(3.5rem,11vw,8.5rem)]">My Gallery</h1>
          <p className="mt-6 max-w-xl font-serif text-xl italic leading-relaxed text-muted">
            Photographs from my lectures, class activities and worksheets, and from the Praana 2026 blood donation
            programme. Select any photo to enlarge it.
          </p>
        </Reveal>
      </header>

      <div className="sticky top-[72px] z-30 border-y border-ink/10 bg-ivory/90 backdrop-blur-md">
        <div className="wrap">
          <div role="group" aria-label="Filter photographs" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 py-3 sm:mx-0 sm:flex-wrap sm:px-0">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={`shrink-0 rounded-full px-4 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  filter === f.id ? 'bg-ink text-ivory' : 'text-ink/70 ring-1 ring-ink/15 hover:text-ink hover:ring-ink/40'
                }`}
              >
                {f.label} <span className={filter === f.id ? 'text-sage' : 'text-muted'}>{count(f.id)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="wrap py-12 sm:py-16" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="columns-1 gap-5 sm:columns-2 lg:columns-3"
          >
            {shown.map((p, i) => (
              <div key={p.src} className="mb-8 break-inside-avoid">
                <PhotoButton photo={p} onOpen={() => lb.open(i)} />
                {p.context && <p className="label mt-2 leading-relaxed text-muted">{p.context}</p>}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <Lightbox photos={shown} index={lb.index} onClose={lb.close} onIndex={lb.setIndex} />
    </div>
  )
}
