import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { asset } from '../data/site'
import type { Photo } from '../data/types'

/** Hook: owns the open index for a set of photos. */
export function useLightbox() {
  const [index, setIndex] = useState<number | null>(null)
  return { index, open: setIndex, close: () => setIndex(null), setIndex }
}

/** Full-screen image viewer. Esc closes; arrow keys move between photos. */
export function Lightbox({
  photos,
  index,
  onClose,
  onIndex,
}: {
  photos: Photo[]
  index: number | null
  onClose: () => void
  onIndex: (i: number) => void
}) {
  const open = index !== null
  const count = photos.length
  const returnFocus = useRef<HTMLElement | null>(null)

  const go = useCallback(
    (step: number) => {
      if (index === null) return
      onIndex((index + step + count) % count)
    },
    [index, count, onIndex],
  )

  useEffect(() => {
    if (!open) return
    returnFocus.current = document.activeElement as HTMLElement
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      returnFocus.current?.focus?.()
    }
  }, [open, go, onClose])

  const photo = index !== null ? photos[index] : null

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[80] flex flex-col bg-ink/95 text-ivory backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <div className="flex items-center justify-between px-4 py-4 sm:px-8">
            <span className="label text-ivory/60">
              {String((index ?? 0) + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close photo viewer"
              autoFocus
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 transition-colors hover:bg-ivory hover:text-ink"
            >
              <X size={18} aria-hidden />
            </button>
          </div>

          <div
            className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-24"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              key={photo.src}
              src={asset(photo.src)}
              alt={photo.alt}
              className="max-h-full max-w-full rounded-lg object-contain"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous photo"
                  className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory text-ink transition-transform hover:scale-105 sm:left-6"
                >
                  <ChevronLeft size={20} aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next photo"
                  className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory text-ink transition-transform hover:scale-105 sm:right-6"
                >
                  <ChevronRight size={20} aria-hidden />
                </button>
              </>
            )}
          </div>

          <div className="mx-auto max-w-3xl px-4 py-5 text-center sm:px-8" onClick={(e) => e.stopPropagation()}>
            <p className="font-serif text-base sm:text-lg">{photo.caption}</p>
            {photo.context && <p className="label mt-3 leading-relaxed text-sage">{photo.context}</p>}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
