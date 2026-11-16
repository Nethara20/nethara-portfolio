import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal, SectionHead } from '../components/ui'
import { chapters, week09 } from '../data/chapters'
import { asset } from '../data/site'

export function Journey() {
  const total = chapters.length + 1

  return (
    <section id="journey" className="scroll-mt-[72px] py-24 sm:py-32">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHead
            className="lg:col-span-8"
            eyebrow="A week-by-week record of professional development"
            title={
              <>
                My Learning
                <br />
                Journey
              </>
            }
          />
          <Reveal delay={0.1} className="lg:col-span-4">
            <p className="label text-muted">
              {chapters.length} of {total} sessions documented
            </p>
            <ol className="mt-4 flex gap-1.5" aria-label="Session record">
              {chapters.map((c) => (
                <li key={c.num} className="h-2 flex-1 rounded-full bg-ink" title={`Week ${c.num}: completed`}>
                  <span className="sr-only">Week {c.num}: completed</span>
                </li>
              ))}
              <li className="h-2 flex-1 rounded-full border border-dashed border-muted-light bg-stone" title="Week 09: not attended">
                <span className="sr-only">Week 09: not attended</span>
              </li>
            </ol>
            <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted">
              <span className="flex items-center gap-2">
                <span className="h-2 w-4 rounded-full bg-ink" aria-hidden /> Completed
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-4 rounded-full border border-dashed border-muted-light bg-stone" aria-hidden /> Not attended
              </span>
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((c, i) => {
            const cover = c.evidence[c.cover]
            return (
              <li key={c.num}>
                <Reveal delay={(i % 3) * 0.07} className="h-full">
                  <Link
                    to={`/chapter/${c.num}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-35px_rgba(17,17,17,0.45)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-stone">
                      <img
                        src={asset(cover.src)}
                        alt=""
                        width={cover.w}
                        height={cover.h}
                        loading="lazy"
                        style={cover.focus ? { objectPosition: cover.focus } : undefined}
                        className="h-full w-full object-cover grayscale-[0.9] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" aria-hidden />
                      <span className="display absolute bottom-4 left-5 text-6xl text-ivory">{c.num}</span>
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="label text-muted">Week {c.num} · Chapter {c.num}</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-sage/25 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-sage-deep">
                          <span className="h-1.5 w-1.5 rounded-full bg-sage-deep" aria-hidden />
                          {c.status}
                        </span>
                      </div>
                      <h3 className="mt-4 font-serif text-2xl leading-tight">{c.title}</h3>
                      <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{c.summary}</p>
                      {c.statusNote && <p className="label mt-4 text-charcoal">Note · {c.statusNote}</p>}
                      <span className="mt-auto flex items-center justify-between border-t border-ink/10 pt-5 text-sm font-semibold">
                        View chapter
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-ivory transition-transform duration-300 group-hover:rotate-45">
                          <ArrowUpRight size={16} aria-hidden />
                        </span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            )
          })}

          <li>
            <Reveal delay={0.14} className="h-full">
              <article
                aria-label="Week 09: session not attended"
                className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-dashed border-ink/25 bg-ivory-deep"
              >
                <div
                  className="relative flex aspect-[16/10] items-end bg-stone/60 p-5"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(-45deg, transparent 0 11px, rgba(17,17,17,0.05) 11px 12px)',
                  }}
                >
                  <span className="display text-outline text-6xl text-muted-light">{week09.num}</span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="label text-muted">Week {week09.num}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-stone px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted">
                      <span className="h-1.5 w-1.5 rounded-full border border-muted" aria-hidden />
                      Not attended
                    </span>
                  </div>
                  <h3 className="display mt-4 text-[1.75rem] leading-none text-muted">{week09.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{week09.text}</p>
                </div>
              </article>
            </Reveal>
          </li>
        </ol>
      </div>
    </section>
  )
}
