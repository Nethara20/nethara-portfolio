import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useLayoutEffect } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ChapterPage } from './pages/ChapterPage'
import { GalleryPage } from './pages/GalleryPage'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { ProjectPage } from './pages/ProjectPage'
import { ReflectionPage } from './pages/ReflectionPage'

function Shell() {
  const location = useLocation()
  const reduce = useReducedMotion()
  const section = (location.state as { section?: string } | null)?.section

  // A new page starts at the top, unless the home page is asked to show a section.
  useLayoutEffect(() => {
    if (!section) window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [location.pathname, section])

  return (
    <>
      <a
        href="#main"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('main')?.focus()
        }}
        className="label sr-only z-[90] rounded-full bg-ink px-5 py-3 text-ivory focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Header dark={location.pathname === '/project'} />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="main"
          tabIndex={-1}
          key={location.pathname}
          className="outline-none"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/chapter/:num" element={<ChapterPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/reflection" element={<ReflectionPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Shell />
    </HashRouter>
  )
}
