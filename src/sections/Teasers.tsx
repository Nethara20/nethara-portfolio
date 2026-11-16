import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Lightbox, useLightbox } from '../components/Lightbox'
import { Eyebrow, PhotoButton, Reveal, SectionHead } from '../components/ui'
import { chapters } from '../data/chapters'
import { photos, praana, team } from '../data/praana'
import { closingQuote } from '../data/reflection'
import { asset } from '../data/site'

export function ProjectTeaser() {
  const facts = [
    { k: 'Date', v: praana.date },
    { k: 'Donors', v: `${praana.donors}` },
    { k: 'Collaborator', v: praana.collaborator },
    { k: 'Organising team', v: `${team.length} members` },
  ]
  return (
    <section id="after-journey" className="pb-24 sm:pb-32">
      <div className="wrap">
        <Reveal>
          <div className="grid overflow-hidden rounded-[2rem] bg-ink text-ivory lg:grid-cols-2">
            <div className="flex flex-col p-8 sm:p-12 lg:p-14">
              <Eyebrow light>Group project</Eyebrow>
              <h2 className="display mt-6 text-[clamp(3rem,8vw,6rem)]">
                Praana
                <br />
                2026
              </h2>
              <p className="mt-5 font-serif text-2xl italic text-ivory/85">{praana.type}</p>
              <p className="mt-5 max-w-md leading-relaxed text-ivory/65">{praana.purpose}</p>
              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-ivory/15 pt-8">
                {facts.map((f) => (
                  <div key={f.k}>
                    <dt className="label text-sage">{f.k}</dt>
                    <dd className="mt-2 font-serif text-xl">{f.v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <Link to="/project" className="btn-light">
                  View the project <ArrowRight size={16} aria-hidden />
                </Link>
              </div>
            </div>
            <div className="relative min-h-[320px] lg:min-h-full">
              <img
                src={asset(photos.selfie.src)}
                alt={photos.selfie.alt}
                width={photos.selfie.w}
                height={photos.selfie.h}
                loading="lazy"
                style={{ objectPosition: photos.selfie.focus }}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/40 to-transparent lg:from-ink/60" aria-hidden />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const teaserPhotos = [
  chapters[1].evidence[1],
  chapters[5].evidence[1],
  photos.thanks,
  chapters[6].evidence[0],
  photos.area,
]

export function GalleryTeaser() {
  const lb = useLightbox()
  const [a, b, c, d, e] = teaserPhotos
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead eyebrow="Photographs and evidence" title="My Gallery" />
          <Reveal>
            <Link to="/gallery" className="btn-outline">
              Open the gallery <ArrowRight size={16} aria-hidden />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:h-[560px] lg:grid-cols-12 lg:grid-rows-2">
            <PhotoButton photo={a} onOpen={() => lb.open(0)} fill showCaption={false} className="col-span-2 aspect-[4/3] lg:col-span-5 lg:row-span-2 lg:aspect-auto" />
            <PhotoButton photo={b} onOpen={() => lb.open(1)} fill showCaption={false} className="aspect-[3/4] lg:col-span-3 lg:row-span-2 lg:aspect-auto" />
            <PhotoButton photo={c} onOpen={() => lb.open(2)} fill showCaption={false} className="aspect-[3/4] lg:col-span-2 lg:aspect-auto" />
            <PhotoButton photo={d} onOpen={() => lb.open(3)} fill showCaption={false} className="aspect-square lg:col-span-2 lg:aspect-auto" />
            <PhotoButton photo={e} onOpen={() => lb.open(4)} fill showCaption={false} className="aspect-square lg:col-span-4 lg:aspect-auto" />
          </div>
        </Reveal>
      </div>
      <Lightbox photos={teaserPhotos} index={lb.index} onClose={lb.close} onIndex={lb.setIndex} />
    </section>
  )
}

export function ReflectionTeaser() {
  return (
    <section className="py-24 sm:py-36">
      <div className="wrap">
        <Reveal className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center">
            <Eyebrow>My reflection</Eyebrow>
          </div>
          <blockquote className="mt-10 font-serif text-[clamp(1.8rem,4vw,3.25rem)] leading-[1.18] tracking-tight">
            “{closingQuote}”
          </blockquote>
          <p className="label mt-8 text-muted">From the conclusion of my portfolio</p>
          <div className="mt-10">
            <Link to="/reflection" className="btn-dark">
              Read my reflection <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
