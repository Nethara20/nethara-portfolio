import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Lightbox, useLightbox } from '../components/Lightbox'
import { PhotoButton, Reveal } from '../components/ui'
import { chapterByNum, chapters } from '../data/chapters'
import type { Block } from '../data/types'
import { NotFound } from './NotFound'

const SECTIONS = [
  { id: 'overview', label: 'Lecture overview' },
  { id: 'key-learnings', label: 'Key learnings' },
  { id: 'activities', label: 'Class activities' },
  { id: 'learned', label: 'What I learned' },
  { id: 'application', label: 'Practical application' },
  { id: 'evidence', label: 'Evidence' },
]

function Part({ index, id, children }: { index: number; id: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-ink/15 pt-8">
      <Reveal>
        <h2 className="flex items-baseline gap-4">
          <span className="label text-sage-deep">{String(index + 1).padStart(2, '0')}</span>
          <span className="label text-ink">{SECTIONS[index].label}</span>
        </h2>
      </Reveal>
      <div className="mt-8">{children}</div>
    </section>
  )
}

function BlockBody({ block }: { block: Block }) {
  return (
    <>
      {block.text && <p className="mt-3 leading-relaxed text-charcoal">{block.text}</p>}
      {block.items && (
        <ul className="mt-4 space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed text-charcoal">
              <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-sage" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export function ChapterPage() {
  const { num } = useParams()
  const chapter = chapterByNum(num)
  const lb = useLightbox()
  if (!chapter) return <NotFound />

  const i = chapters.indexOf(chapter)
  const prev = chapters[i - 1]
  const next = chapters[i + 1]
  const cover = chapter.evidence[chapter.cover]

  return (
    <article className="pt-[72px]">
      {/* Header */}
      <header className="wrap pb-16 pt-10 sm:pt-14">
        <nav aria-label="Breadcrumb" className="label flex flex-wrap items-center gap-2 text-muted">
          <Link to="/" state={{ section: 'journey' }} className="hover:text-ink">
            Learning Journey
          </Link>
          <span aria-hidden>/</span>
          <span className="text-ink" aria-current="page">
            Chapter {chapter.num}
          </span>
        </nav>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <p className="display text-outline text-[clamp(5rem,16vw,11rem)] text-ink/80" aria-hidden>
              {chapter.num}
            </p>
            <p className="label mt-4 text-muted">
              Week {chapter.num} · Chapter {chapter.num}
            </p>
            <h1 className="mt-4 font-serif text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.04] tracking-tight">
              {chapter.title}
            </h1>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="chip border-sage-deep/30 bg-sage/25 text-sage-deep">
                <span className="h-1.5 w-1.5 rounded-full bg-sage-deep" aria-hidden />
                {chapter.status}
              </span>
              {chapter.statusNote && <span className="chip">{chapter.statusNote}</span>}
              {chapter.facilitator && <span className="chip">Facilitator · {chapter.facilitator}</span>}
              {chapter.skills.map((s) => (
                <span key={s} className="chip bg-white">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4">
            <PhotoButton
              photo={cover}
              onOpen={() => lb.open(chapter.cover)}
              fill
              showCaption={false}
              className="aspect-[4/5] max-h-[460px] w-full [&>button]:rounded-[1.75rem]"
            />
          </Reveal>
        </div>
      </header>

      {/* Body */}
      <div className="wrap grid gap-12 pb-24 lg:grid-cols-12 lg:gap-10">
        <aside className="hidden lg:col-span-3 lg:block">
          <nav aria-label="In this chapter" className="sticky top-28">
            <p className="label text-muted">In this chapter</p>
            <ol className="mt-5 space-y-1 border-l border-ink/15">
              {SECTIONS.map((s, idx) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="-ml-px flex w-full gap-3 border-l border-transparent py-1.5 pl-4 text-left text-sm text-muted transition-colors hover:border-ink hover:text-ink"
                  >
                    <span className="tabular-nums text-muted-light">{String(idx + 1).padStart(2, '0')}</span>
                    {s.label}
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="space-y-20 lg:col-span-9">
          <Part index={0} id="overview">
            <Reveal className="prose-body max-w-3xl">
              {chapter.overview.map((p, k) => (
                <p
                  key={k}
                  className={k === 0 ? 'font-serif text-xl leading-relaxed text-ink sm:text-2xl' : 'text-lg leading-relaxed text-charcoal'}
                >
                  {p}
                </p>
              ))}
            </Reveal>
          </Part>

          <Part index={1} id="key-learnings">
            <div className="grid gap-4 sm:grid-cols-2">
              {chapter.keyLearnings.map((b, k) => (
                <Reveal key={b.title} delay={(k % 2) * 0.06}>
                  <div className="h-full rounded-2xl bg-white p-6 ring-1 ring-ink/5 sm:p-7">
                    <h3 className="font-serif text-xl leading-snug">{b.title}</h3>
                    <BlockBody block={b} />
                  </div>
                </Reveal>
              ))}
            </div>
          </Part>

          <Part index={2} id="activities">
            <ol className="space-y-4">
              {chapter.activities.map((a, k) => (
                <Reveal key={a.title}>
                  <li className="grid gap-4 rounded-2xl border border-ink/10 p-6 sm:grid-cols-[3.5rem_1fr] sm:p-7">
                    <span className="display text-3xl text-sage-deep">{String(k + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="font-serif text-xl leading-snug">{a.title}</h3>
                      <BlockBody block={a} />
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </Part>

          <Part index={3} id="learned">
            <Reveal>
              <div className="border-l-2 border-ink pl-6 sm:pl-10">
                <p className="label text-muted">In my own words</p>
                <div className="prose-body mt-6 max-w-3xl">
                  {chapter.learned.map((p, k) => (
                    <p key={k} className="font-serif text-xl leading-relaxed text-ink sm:text-[1.4rem]">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </Part>

          <Part index={4} id="application">
            <Reveal>
              <div className="rounded-[1.75rem] bg-ink p-7 text-ivory sm:p-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-sage px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink">
                  {chapter.application.verdict}
                </span>
                <div className="prose-body mt-6 max-w-3xl">
                  {chapter.application.text.map((p, k) => (
                    <p key={k} className="text-lg leading-relaxed text-ivory/85">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </Part>

          <Part index={5} id="evidence">
            <div className={`grid gap-6 ${chapter.evidence.length > 1 ? 'sm:grid-cols-2' : ''} ${chapter.evidence.length > 2 ? 'lg:grid-cols-3' : ''}`}>
              {chapter.evidence.map((p, k) => (
                <Reveal key={p.src} delay={k * 0.06}>
                  <PhotoButton photo={p} onOpen={() => lb.open(k)} />
                </Reveal>
              ))}
            </div>
          </Part>
        </div>
      </div>

      {/* Previous / next */}
      <nav aria-label="Chapters" className="border-t border-ink/15">
        <div className="wrap grid sm:grid-cols-2">
          {prev ? (
            <Link to={`/chapter/${prev.num}`} className="group flex flex-col gap-3 py-10 sm:pr-8">
              <span className="label flex items-center gap-2 text-muted">
                <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" aria-hidden />
                Previous · Chapter {prev.num}
              </span>
              <span className="font-serif text-2xl">{prev.title}</span>
            </Link>
          ) : (
            <Link to="/" state={{ section: 'journey' }} className="group flex flex-col gap-3 py-10 sm:pr-8">
              <span className="label flex items-center gap-2 text-muted">
                <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" aria-hidden />
                Back
              </span>
              <span className="font-serif text-2xl">My Learning Journey</span>
            </Link>
          )}
          {next ? (
            <Link
              to={`/chapter/${next.num}`}
              className="group flex flex-col gap-3 border-t border-ink/15 py-10 sm:items-end sm:border-l sm:border-t-0 sm:pl-8 sm:text-right"
            >
              <span className="label flex items-center gap-2 text-muted">
                Next · Chapter {next.num}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
              <span className="font-serif text-2xl">{next.title}</span>
            </Link>
          ) : (
            <Link
              to="/reflection"
              className="group flex flex-col gap-3 border-t border-ink/15 py-10 sm:items-end sm:border-l sm:border-t-0 sm:pl-8 sm:text-right"
            >
              <span className="label flex items-center gap-2 text-muted">
                Week 09 not attended · Continue
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
              <span className="font-serif text-2xl">My Reflection</span>
            </Link>
          )}
        </div>
      </nav>

      <Lightbox photos={chapter.evidence} index={lb.index} onClose={lb.close} onIndex={lb.setIndex} />
    </article>
  )
}
