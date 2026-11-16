import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { scrollToSection } from '../components/Header'
import { chapters } from '../data/chapters'
import { praana, team } from '../data/praana'
import { asset, student, tagline } from '../data/site'

const portrait = { src: 'assets/nethara/nethara-portrait.jpg', w: 1122, h: 1402 }

/** Borders for the 2 x 2 (mobile) and 4 x 1 (desktop) stat grid. */
const statCell = [
  '',
  'border-l pl-4 sm:pl-6',
  'border-t lg:border-l lg:border-t-0 lg:pl-6',
  'border-l border-t pl-4 sm:pl-6 lg:border-t-0',
]

export function Hero() {
  const reduce = useReducedMotion()
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
        }

  const stats = [
    { value: String(chapters.length).padStart(2, '0'), label: 'Documented chapters' },
    { value: '01', label: 'Session not attended' },
    { value: String(team.length).padStart(2, '0'), label: 'Organising team, Praana 2026' },
    { value: praana.donors, label: 'Blood donors, Praana 2026' },
  ]

  return (
    <section id="home" className="relative overflow-hidden pt-[72px]">
      <div className="wrap grid items-center gap-14 pb-14 pt-10 sm:pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-20 lg:pt-16">
        <div className="lg:col-span-7">
          <motion.div {...rise(0)} className="flex flex-wrap gap-2">
            <span className="chip bg-white">Professional Skills · {student.year}</span>
            <span className="chip">{student.code}</span>
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden />
              {student.id}
            </span>
          </motion.div>

          <h1 className="mt-8">
            <motion.span {...rise(0.08)} className="display block text-[clamp(3.75rem,10.5vw,8.75rem)]">
              {student.initials}
            </motion.span>
            <motion.span {...rise(0.16)} className="display block text-[clamp(3.75rem,10.5vw,8.75rem)]">
              {student.surname}
            </motion.span>
            <motion.span
              {...rise(0.26)}
              className="mt-6 block font-serif text-[clamp(1.6rem,3.4vw,2.6rem)] italic leading-tight text-charcoal"
            >
              My Professional Journey
            </motion.span>
          </h1>

          <motion.p {...rise(0.34)} className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            {tagline} A lesson-by-lesson record of the Professional Skills module, in my own words.
          </motion.p>

          <motion.div {...rise(0.42)} className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/"
              state={{ section: 'journey' }}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('journey')
              }}
              className="btn-dark"
            >
              Explore my portfolio <ArrowRight size={16} aria-hidden />
            </Link>
            <Link
              to="/"
              state={{ section: 'about' }}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('about')
              }}
              className="btn-outline"
            >
              About me
            </Link>
          </motion.div>
        </div>

        {/* Portrait in an arched frame, with a stone panel and sage accents behind it. */}
        <motion.div
          className="relative mx-auto w-full max-w-[440px] lg:col-span-5 lg:max-w-[460px]"
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative pb-8 pl-6 pr-4 pt-6 sm:pl-10">
            <div className="absolute bottom-0 left-0 right-[22%] top-[18%] rounded-[2.5rem] bg-stone" aria-hidden />
            <div
              className="absolute right-0 top-0 h-24 w-24 rounded-full border border-sage-deep/40 sm:h-28 sm:w-28"
              aria-hidden
            />
            <div className="absolute right-[12%] top-[6%] h-3 w-3 rounded-full bg-sage" aria-hidden />

            <figure className="relative">
              {/* For a 4:5 frame, a 40% vertical radius equals half the width: a true semicircle on top. */}
              <div
                className="overflow-hidden bg-ink shadow-[0_40px_80px_-40px_rgba(17,17,17,0.7)]"
                style={{ borderRadius: '50% 50% 2rem 2rem / 40% 40% 2rem 2rem' }}
              >
                <img
                  src={asset(portrait.src)}
                  alt={`Portrait of ${student.name}`}
                  width={portrait.w}
                  height={portrait.h}
                  fetchPriority="high"
                  className="aspect-[4/5] w-full object-cover object-[50%_30%]"
                />
              </div>
              <figcaption className="absolute -bottom-5 -left-4 rounded-2xl bg-ivory px-5 py-4 shadow-[0_20px_40px_-20px_rgba(17,17,17,0.45)] sm:-left-8">
                <span className="block font-serif text-lg leading-tight">{student.name}</span>
                <span className="label mt-2 block text-muted">
                  {student.module} · {student.code}
                </span>
              </figcaption>
            </figure>
          </div>
        </motion.div>
      </div>

      <div className="wrap">
        <dl className="grid grid-cols-2 border-t border-ink/15 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col border-ink/15 py-6 pr-4 sm:py-8 ${statCell[i]}`}
            >
              <dt className="label order-2 mt-3 block text-muted">{s.label}</dt>
              <dd className="display -order-1 text-4xl sm:text-5xl">{s.value}</dd>
            </div>
          ))}
        </dl>
        <button
          type="button"
          onClick={() => scrollToSection('about')}
          className="label mx-auto mb-6 mt-2 flex items-center gap-2 py-3 text-muted transition-colors hover:text-ink"
        >
          Scroll <ArrowDown size={14} aria-hidden />
        </button>
      </div>
    </section>
  )
}
