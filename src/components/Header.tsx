import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { nav, student, type NavItem } from '../data/site'

export const SECTION_IDS = nav.filter((n) => n.section).map((n) => n.section!) as string[]

/** Smoothly scrolls to a home-page section. */
export function scrollToSection(id: string) {
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/** Tracks which home section is in view. */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState('home')
  useEffect(() => {
    if (!enabled) return
    const onScroll = () => {
      const line = window.innerHeight * 0.35
      let current = 'home'
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      // Below the journey, no nav section is current.
      const after = document.getElementById('after-journey')
      if (after && after.getBoundingClientRect().top <= line) current = ''
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [enabled])
  return active
}

/** A nav entry: page items are plain links, section items scroll on the home page. */
function NavLink({
  item,
  className,
  onDone,
  children,
}: {
  item: NavItem
  className: string
  onDone?: () => void
  children: React.ReactNode
}) {
  const { pathname } = useLocation()
  if (item.path) {
    return (
      <Link to={item.path} className={className} onClick={onDone}>
        {children}
      </Link>
    )
  }
  return (
    <Link
      to="/"
      state={{ section: item.section }}
      className={className}
      onClick={(e) => {
        onDone?.()
        if (pathname === '/') {
          e.preventDefault()
          scrollToSection(item.section!)
        }
      }}
    >
      {children}
    </Link>
  )
}

export function Header({ dark }: { dark: boolean }) {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(pathname === '/')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const isActive = (item: NavItem) => {
    if (item.path) return pathname.startsWith(item.path)
    if (pathname.startsWith('/chapter')) return item.section === 'journey'
    return pathname === '/' && active === item.section
  }

  const light = dark && !scrolled && !open
  const bar = scrolled
    ? 'bg-ivory/90 backdrop-blur-md border-b border-ink/10'
    : 'bg-transparent border-b border-transparent'

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${open ? 'border-b border-transparent' : bar}`}>
        <div className="wrap flex h-[72px] items-center justify-between gap-6">
          <NavLink
            item={{ label: 'Home', section: 'home' }}
            className={`group flex items-center gap-3 ${open || light ? 'text-ivory' : 'text-ink'}`}
          >
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-full font-serif text-lg transition-colors ${open || light ? 'bg-ivory text-ink' : 'bg-ink text-ivory'}`}
              aria-hidden
            >
              N
            </span>
            <span className="font-serif text-lg leading-none tracking-tight">
              {student.name}
            </span>
          </NavLink>

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => (
                <li key={item.label}>
                  <NavLink
                    item={item}
                    className={`relative rounded-full px-3.5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-colors ${
                      isActive(item)
                        ? light
                          ? 'bg-ivory text-ink'
                          : 'bg-ink text-ivory'
                        : light
                          ? 'text-ivory/80 hover:text-ivory'
                          : 'text-ink/70 hover:text-ink'
                    }`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className={`flex h-11 w-11 items-center justify-center rounded-full xl:hidden ${open || light ? 'text-ivory' : 'text-ink'}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-6" aria-hidden>
              <span
                className={`absolute left-0 h-[1.5px] w-6 bg-current transition-all duration-300 ${open ? 'top-1/2 rotate-45' : 'top-0'}`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-6 bg-current transition-all duration-300 ${open ? 'top-1/2 -rotate-45' : 'top-full'}`}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink text-ivory xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav aria-label="Mobile" className="wrap flex-1 pt-28">
              <ul className="space-y-1">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i + 0.05, duration: 0.4 }}
                  >
                    <NavLink
                      item={item}
                      onDone={() => setOpen(false)}
                      className="group flex items-baseline gap-4 border-b border-ivory/10 py-3"
                    >
                      <span className="label w-6 text-sage">{String(i + 1).padStart(2, '0')}</span>
                      <span
                        className={`font-serif text-[clamp(1.9rem,8vw,3rem)] leading-tight transition-colors ${isActive(item) ? 'text-ivory' : 'text-ivory/60 group-hover:text-ivory'}`}
                      >
                        {item.label}
                      </span>
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="wrap label flex flex-wrap gap-x-6 gap-y-3 py-8 text-ivory/50">
              <span>{student.id}</span>
              <span>{student.module}</span>
              <span>{student.code}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
