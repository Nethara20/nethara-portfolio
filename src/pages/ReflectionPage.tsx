import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Eyebrow, Reveal } from '../components/ui'
import { chapterByNum } from '../data/chapters'
import { closingQuote, opening, sections } from '../data/reflection'
import { student } from '../data/site'

export function ReflectionPage() {
  return (
    <div className="pt-[72px]">
      <header className="wrap pb-20 pt-12 sm:pb-28 sm:pt-16">
        <Reveal>
          <Eyebrow>Final reflection · {student.module} {student.code}</Eyebrow>
          <h1 className="display mt-6 text-[clamp(3.5rem,11vw,8.5rem)]">
            My
            <br />
            Reflection
          </h1>
        </Reveal>
        <Reveal delay={0.1} className="mt-12 grid lg:grid-cols-12">
          <p className="font-serif text-[clamp(1.4rem,2.6vw,2.1rem)] leading-[1.35] lg:col-span-9 lg:col-start-4">
            {opening}
          </p>
        </Reveal>
      </header>

      <section className="bg-white py-20 sm:py-28">
        <div className="wrap">
          <ol>
            {sections.map((s, i) => (
              <li key={s.title} className="grid gap-6 border-t border-ink/15 py-12 lg:grid-cols-12 lg:gap-10">
                <Reveal className="lg:col-span-3">
                  <span className="label text-sage-deep">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="mt-3 font-serif text-2xl leading-snug sm:text-3xl">{s.title}</h2>
                </Reveal>
                <Reveal delay={0.06} className="lg:col-span-7 lg:col-start-5">
                  <div className="prose-body">
                    {s.text.map((p) => (
                      <p key={p} className="text-lg leading-relaxed text-charcoal">
                        {p}
                      </p>
                    ))}
                  </div>
                  {s.chapters && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {s.chapters.map((n) => (
                        <Link
                          key={n}
                          to={`/chapter/${n}`}
                          className="chip transition-colors hover:border-ink hover:bg-ink hover:text-ivory"
                        >
                          Chapter {n} · {chapterByNum(n)?.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink py-24 text-ivory sm:py-36">
        <Reveal className="wrap max-w-4xl text-center">
          <blockquote className="font-serif text-[clamp(1.8rem,4vw,3.25rem)] leading-[1.2] tracking-tight">
            “{closingQuote}”
          </blockquote>
          <p className="display mt-16 text-[clamp(2.5rem,7vw,5rem)] text-sage">Thank you</p>
          <p className="label mt-5 text-ivory/60">{student.name} · {student.id}</p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link to="/" state={{ section: 'journey' }} className="btn-outline-light">
              Back to my learning journey
            </Link>
            <Link to="/project" className="btn-light">
              Praana 2026 <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
