import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToSection } from '../components/Header'
import { About } from '../sections/About'
import { Hero } from '../sections/Hero'
import { Journey } from '../sections/Journey'
import { Skills } from '../sections/Skills'
import { GalleryTeaser, ProjectTeaser, ReflectionTeaser } from '../sections/Teasers'

export function Home() {
  const location = useLocation()
  const section = (location.state as { section?: string } | null)?.section

  // Arriving from another page with a section in mind: scroll to it once rendered.
  useEffect(() => {
    if (!section) return
    const t = window.setTimeout(() => scrollToSection(section), 60)
    return () => window.clearTimeout(t)
  }, [section, location.key])

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Journey />
      <ProjectTeaser />
      <GalleryTeaser />
      <ReflectionTeaser />
    </>
  )
}
