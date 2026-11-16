import { Link } from 'react-router-dom'
import { Reveal, SectionHead } from '../components/ui'
import { skills } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-[72px] bg-ink py-24 text-ivory sm:py-32">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHead
            light
            className="lg:col-span-7"
            eyebrow="Professional skills"
            title="My Skills"
            intro="The skills this module helped me work on, each linked to the chapter it came from."
          />
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-sm leading-relaxed text-ivory/60">
              No scores or percentages here. Each skill is backed by a lecture, an activity or something I tried
              afterwards.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-ivory/10 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <li key={s.name} className="group flex flex-col bg-ink p-7 transition-colors duration-500 hover:bg-charcoal sm:p-8">
              <Reveal delay={(i % 4) * 0.06} className="flex h-full flex-col">
                <span className="label text-sage">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-8 font-serif text-[1.65rem] leading-tight">{s.name}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ivory/70">{s.text}</p>
                <div className="mt-auto pt-8">
                  <p className="label text-ivory/50">Evidence</p>
                  <p className="mt-2.5 font-serif text-[0.95rem] italic leading-relaxed text-ivory/85">{s.evidence}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.chapters.map((n) => (
                      <Link
                        key={n}
                        to={`/chapter/${n}`}
                        className="rounded-full border border-ivory/25 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ivory/80 transition-colors hover:border-sage hover:bg-sage hover:text-ink"
                      >
                        Chapter {n}
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
