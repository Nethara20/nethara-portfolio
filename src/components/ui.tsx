import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { asset } from '../data/site'
import type { Photo } from '../data/types'

/** Fades content up once as it scrolls into view. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/** Small uppercase eyebrow with a sage dot. */
export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`label flex items-center gap-3 ${light ? 'text-ivory/70' : 'text-muted'}`}>
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sage" aria-hidden />
      {children}
    </p>
  )
}

/** Section heading: eyebrow, large title and optional intro. */
export function SectionHead({
  eyebrow,
  title,
  intro,
  light = false,
  className = '',
}: {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  light?: boolean
  className?: string
}) {
  return (
    <Reveal className={className}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className={`display mt-5 text-[clamp(2.5rem,7vw,5.5rem)] ${light ? 'text-ivory' : 'text-ink'}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-6 max-w-2xl font-serif text-lg italic leading-relaxed sm:text-xl ${light ? 'text-ivory/75' : 'text-muted'}`}>
          {intro}
        </p>
      )}
    </Reveal>
  )
}

/** A photograph button that opens the lightbox. Keeps its natural ratio unless `fill` is set. */
export function PhotoButton({
  photo,
  onOpen,
  className = '',
  fill = false,
  sizes,
  showCaption = true,
}: {
  photo: Photo
  onOpen: () => void
  className?: string
  fill?: boolean
  sizes?: string
  showCaption?: boolean
}) {
  return (
    <figure className={`group ${className}`}>
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Enlarge photo: ${photo.caption}`}
        className={`relative block w-full overflow-hidden rounded-xl bg-stone ${fill ? 'h-full' : ''}`}
      >
        <img
          src={asset(photo.src)}
          alt={photo.alt}
          width={photo.w}
          height={photo.h}
          loading="lazy"
          decoding="async"
          sizes={sizes}
          style={photo.focus ? { objectPosition: photo.focus } : undefined}
          className={`w-full transition-transform duration-700 ease-out group-hover:scale-[1.03] ${fill ? 'h-full object-cover' : 'h-auto'}`}
        />
        <span
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ivory/90 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
          aria-hidden
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M8.5 1.5h4v4M5.5 12.5h-4v-4M12.5 1.5 8 6M1.5 12.5 6 8" />
          </svg>
        </span>
      </button>
      {showCaption && (
        <figcaption className="mt-3 text-sm leading-snug text-muted">{photo.caption}</figcaption>
      )}
    </figure>
  )
}
