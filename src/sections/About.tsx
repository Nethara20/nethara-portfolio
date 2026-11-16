import { Eyebrow, Reveal } from '../components/ui'
import { student } from '../data/site'

const details = [
  { label: 'Name', value: student.name },
  { label: 'Student ID', value: student.id },
  { label: 'Module', value: student.module },
  { label: 'Course code', value: student.code },
  { label: 'Lecturer in charge', value: student.lecturer },
  { label: 'Portfolio', value: `Professional Skills ${student.year}` },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-[72px] bg-white py-24 sm:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <Eyebrow>About me</Eyebrow>
          <h2 className="mt-6 font-serif text-[clamp(2.2rem,4.6vw,3.75rem)] leading-[1.08] tracking-tight">
            Learning how I come across, <em className="text-muted">not just what I know.</em>
          </h2>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.08} className="prose-body text-lg leading-relaxed text-charcoal">
            <p>
              I’m W.H.B. Nethara, and this is my portfolio for the Professional Skills module. It’s a
              lesson-by-lesson record of what each lecture covered, what I took from it, and whether I’ve
              actually managed to apply it yet.
            </p>
            <p>
              Not every week went to plan. I missed the first lecture because of a medical emergency, a traffic
              jam meant I arrived when the meetings lecture was almost over, and I did not attend Week 09. Where
              that happened, I’ve said so honestly and worked from the slides where I could.
            </p>
            <p>
              I usually prefer working alone, but a few group activities in this module changed my mind about
              that, and I was one of the seven members of the team that organised Praana 2026, a blood donation
              programme with the Leo Club of SCU.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <dl className="mt-12 grid grid-cols-1 border-t border-ink/15 sm:grid-cols-2">
              {details.map((d) => (
                <div key={d.label} className="border-b border-ink/15 py-5 sm:odd:pr-6 sm:even:border-l sm:even:pl-6">
                  <dt className="label text-muted">{d.label}</dt>
                  <dd className="mt-2.5 font-serif text-xl">{d.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
