import { Link } from 'react-router-dom'
import { chapters } from '../data/chapters'
import { student, tagline } from '../data/site'

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="wrap pb-10 pt-20 sm:pt-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="display text-[clamp(3rem,10vw,7.5rem)]">
              {student.initials}
              <br />
              {student.surname}
            </p>
            <p className="mt-6 max-w-md font-serif text-lg italic text-ivory/70">{tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-6">
            <div>
              <p className="label text-sage">Chapters</p>
              <ul className="mt-5 space-y-2.5 text-sm text-ivory/75">
                {chapters.map((c) => (
                  <li key={c.num}>
                    <Link to={`/chapter/${c.num}`} className="transition-colors hover:text-ivory">
                      {c.num} · {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label text-sage">Explore</p>
              <ul className="mt-5 space-y-2.5 text-sm text-ivory/75">
                <li>
                  <Link to="/" state={{ section: 'journey' }} className="hover:text-ivory">
                    Learning Journey
                  </Link>
                </li>
                <li>
                  <Link to="/project" className="hover:text-ivory">
                    Praana 2026
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-ivory">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/reflection" className="hover:text-ivory">
                    My Reflection
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="label text-sage">Student</p>
              <dl className="mt-5 space-y-2.5 text-sm text-ivory/75">
                <div>
                  <dt className="sr-only">Name</dt>
                  <dd>{student.name}</dd>
                </div>
                <div>
                  <dt className="sr-only">Student ID</dt>
                  <dd>{student.id}</dd>
                </div>
                <div>
                  <dt className="sr-only">Module</dt>
                  <dd>
                    {student.module} · {student.code}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="label mt-20 flex flex-col gap-3 border-t border-ivory/15 pt-6 text-ivory/50 sm:flex-row sm:justify-between">
          <span>My Professional Journey · {student.year}</span>
          <span>Professional Skills Portfolio</span>
        </div>
      </div>
    </footer>
  )
}
