import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Lightbox, useLightbox } from '../components/Lightbox'
import { Eyebrow, PhotoButton, Reveal } from '../components/ui'
import {
  allPraanaPhotos,
  budgetNote,
  eventDay,
  eventPhotos,
  photos,
  planning,
  praana,
  promotion,
  reflection,
  team,
  venue,
} from '../data/praana'
import type { Photo } from '../data/types'

function Head({ eyebrow, title, light = false }: { eyebrow: string; title: ReactNode; light?: boolean }) {
  return (
    <Reveal>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className={`mt-5 font-serif text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.06] tracking-tight ${light ? 'text-ivory' : ''}`}>
        {title}
      </h2>
    </Reveal>
  )
}

function Paras({ text, light = false }: { text: string[]; light?: boolean }) {
  return (
    <div className="prose-body">
      {text.map((p) => (
        <p key={p} className={`text-lg leading-relaxed ${light ? 'text-ivory/80' : 'text-charcoal'}`}>
          {p}
        </p>
      ))}
    </div>
  )
}

export function ProjectPage() {
  const lb = useLightbox()
  const open = (p: Photo) => lb.open(allPraanaPhotos.indexOf(p))

  return (
    <>
      {/* Hero */}
      <section className="bg-ink pt-[72px] text-ivory">
        <div className="wrap pb-14 pt-12 sm:pt-16">
          <Reveal>
            <Eyebrow light>Group project · Professional Skills</Eyebrow>
            <h1 className="display mt-8 text-[clamp(4rem,15vw,12.5rem)]">
              Praana
              <span className="block text-sage">2026</span>
            </h1>
          </Reveal>
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <Reveal delay={0.08} className="lg:col-span-6">
              <p className="font-serif text-[clamp(1.6rem,3.2vw,2.5rem)] italic leading-tight">{praana.type}</p>
              <p className="label mt-4 text-ivory/60">{praana.strap}</p>
            </Reveal>
            <Reveal delay={0.14} className="lg:col-span-6">
              <dl className="grid grid-cols-1 border-t border-ivory/20 sm:grid-cols-3">
                {[
                  { k: 'Date', v: praana.date },
                  { k: 'Outcome', v: `${praana.donors} donors` },
                  { k: 'Collaborator', v: praana.collaborator },
                ].map((f, i) => (
                  <div key={f.k} className={`border-b border-ivory/20 py-5 sm:border-b-0 ${i > 0 ? 'sm:border-l sm:pl-5' : ''}`}>
                    <dt className="label text-sage">{f.k}</dt>
                    <dd className="mt-2 font-serif text-xl">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
        <div className="wrap pb-16 sm:pb-24">
          <Reveal delay={0.1}>
            <PhotoButton
              photo={photos.selfie}
              onOpen={() => open(photos.selfie)}
              fill
              showCaption={false}
              className="aspect-[16/10] w-full sm:aspect-[21/9] [&>button]:rounded-[1.75rem]"
            />
            <p className="mt-4 text-sm text-ivory/60">{photos.selfie.caption}</p>
          </Reveal>
        </div>
      </section>

      {/* About the programme */}
      <section className="py-24 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Head eyebrow="About the programme" title="Supporting community healthcare." />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="font-serif text-2xl leading-snug">{praana.purpose}</p>
              <p className="label mt-12 text-muted">Open to</p>
              <ul className="mt-4 grid gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2">
                {praana.audience.map((a) => (
                  <li key={a} className="bg-ivory p-5 leading-snug">
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-10 flex items-center gap-6 rounded-2xl bg-white p-6 ring-1 ring-ink/5 sm:p-8">
                <span className="display text-6xl sm:text-7xl">{praana.donors}</span>
                <p className="leading-relaxed text-charcoal">{praana.result}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-24 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Head eyebrow="The organising team" title="Seven members, one shared initiative." />
            <Reveal delay={0.06}>
              <ol className="mt-12 border-t border-ink/15">
                {team.map((m, i) => (
                  <li
                    key={m.name}
                    className={`grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 gap-y-1 border-b border-ink/15 px-3 py-5 sm:grid-cols-[3rem_1fr_auto] ${m.self ? 'bg-sage/15' : ''}`}
                  >
                    <span className="label text-muted">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-serif text-xl">
                      {m.name}
                      {m.alias && <span className="text-muted"> ({m.alias})</span>}
                    </span>
                    {m.role && (
                      <span className="label col-start-2 text-sage-deep sm:col-start-3 sm:text-right">{m.role}</span>
                    )}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.1} className="lg:sticky lg:top-28">
              <div className="rounded-[1.75rem] bg-ink p-8 text-ivory sm:p-10">
                <p className="label text-sage">Official collaborator</p>
                <p className="mt-5 font-serif text-4xl leading-tight">{praana.collaborator}</p>
                <p className="mt-5 leading-relaxed text-ivory/70">
                  The group coordinated with the Leo Club of SCU, which arranged the event date with the blood bank.
                  Our student group supported the programme with refreshments and venue arrangements.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Planning */}
      <section className="py-24 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Head eyebrow="Project planning" title="From first discussion to event day." />
            <Reveal delay={0.08}>
              <div className="mt-10 rounded-2xl bg-white p-7 ring-1 ring-ink/5">
                <p className="label text-muted">Planned budget</p>
                <p className="display mt-4 text-5xl">{praana.budget}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{budgetNote}</p>
              </div>
            </Reveal>
          </div>
          <ol className="relative lg:col-span-7 lg:col-start-6">
            <span className="absolute bottom-6 left-[1.4rem] top-6 w-px bg-ink/15" aria-hidden />
            {planning.map((s, i) => (
              <li key={s.title} className="relative grid grid-cols-[2.8rem_1fr] gap-5 pb-10 last:pb-0">
                <Reveal delay={i * 0.04}>
                  <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-sm font-semibold text-ivory">
                    {i + 1}
                  </span>
                </Reveal>
                <Reveal delay={i * 0.04 + 0.03}>
                  <h3 className="pt-2 font-serif text-2xl leading-snug">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-charcoal">{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Promotion */}
      <section className="bg-white py-24 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <Head eyebrow="Promotion" title="Reaching beyond the university." />
            <Reveal delay={0.06} className="mt-8">
              <Paras text={promotion.text} />
              <ul className="mt-8 flex flex-wrap gap-2">
                {promotion.people.map((p) => (
                  <li key={p.name} className="chip">
                    {p.name} <span className="font-normal normal-case tracking-normal text-muted">· {p.from}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="grid grid-cols-5 gap-4 lg:col-span-7">
            <Reveal className="col-span-5 sm:col-span-3">
              <PhotoButton photo={photos.flyers} onOpen={() => open(photos.flyers)} />
            </Reveal>
            <Reveal delay={0.08} className="col-span-5 sm:col-span-2">
              <PhotoButton photo={photos.poster} onOpen={() => open(photos.poster)} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Venue */}
      <section className="py-24 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <PhotoButton photo={photos.hall} onOpen={() => open(photos.hall)} className="mx-auto max-w-md" />
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <Head eyebrow="Venue preparation" title="The third-floor hall, the day before." />
            <Reveal delay={0.06} className="mt-8">
              <Paras text={venue.text} />
              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {['Chairs and tables collected', 'Hall arranged', 'Ready the day before'].map((t) => (
                  <li key={t} className="flex items-center gap-3 rounded-xl border border-ink/10 px-4 py-3 text-sm">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sage-deep" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Event day */}
      <section className="bg-ink py-24 text-ivory sm:py-32">
        <div className="wrap">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <Head light eyebrow="Event day and refreshments" title="21 October 2026." />
              <Reveal delay={0.06} className="mt-8">
                <Paras light text={eventDay.text} />
              </Reveal>
            </div>
            <Reveal delay={0.1} className="lg:col-span-6">
              <PhotoButton photo={photos.packing} onOpen={() => open(photos.packing)} className="[&_figcaption]:text-ivory/60" />
            </Reveal>
          </div>

          <Reveal className="mt-20">
            <p className="label text-sage">Adapting on the day</p>
          </Reveal>
          <ol className="mt-6 grid gap-px overflow-hidden rounded-[1.75rem] bg-ivory/15 sm:grid-cols-2 lg:grid-cols-4">
            {eventDay.story.map((s, i) => (
              <li key={s.label} className="bg-ink p-7 sm:p-8">
                <Reveal delay={i * 0.06}>
                  <span className="label text-ivory/50">
                    {String(i + 1).padStart(2, '0')} · {s.label}
                  </span>
                  <h3 className="mt-6 font-serif text-2xl leading-snug">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-ivory/70">{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Evidence */}
      <section className="py-24 sm:py-32">
        <div className="wrap">
          <Head eyebrow="Photograph evidence" title="From the programme." />
          <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {eventPhotos.map((p, i) => (
              <Reveal key={p.src} delay={(i % 3) * 0.06} className="mb-8 break-inside-avoid">
                <PhotoButton photo={p} onOpen={() => open(p)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="bg-white py-24 sm:py-32">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Head eyebrow="My Praana 2026 reflection" title="What being part of the team taught me." />
            </div>
            <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
              {reflection.map((r, i) => (
                <Reveal key={r.title} delay={(i % 2) * 0.06}>
                  <span className="label text-sage-deep">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 font-serif text-2xl leading-snug">{r.title}</h3>
                  <div className="mt-3">
                    {r.text.map((t) => (
                      <p key={t} className="leading-relaxed text-charcoal">
                        {t}
                      </p>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="mt-20 flex flex-wrap justify-center gap-3">
            <Link to="/gallery" className="btn-outline">
              See all photographs
            </Link>
            <Link to="/reflection" className="btn-dark">
              My final reflection <ArrowRight size={16} aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      <Lightbox photos={allPraanaPhotos} index={lb.index} onClose={lb.close} onIndex={lb.setIndex} />
    </>
  )
}
