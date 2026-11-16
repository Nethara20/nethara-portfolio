/** Resolves a file in /public so it works from any folder or static host. */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

/** Confirmed details from the cover page of Nethara's Professional Skills portfolio. */
export const student = {
  name: 'W.H.B. Nethara',
  initials: 'W.H.B.',
  surname: 'Nethara',
  id: 'SA25610259',
  module: 'Professional Skills',
  code: 'IT1215',
  lecturer: 'Mrs. Ravihari Weerasinghe',
  year: '2026',
}

export const tagline = 'A journey of learning, developing and growing.'

export type NavItem = { label: string; section?: string; path?: string }

/** Items with `section` scroll on the home page; items with `path` open a page. */
export const nav: NavItem[] = [
  { label: 'Home', section: 'home' },
  { label: 'About', section: 'about' },
  { label: 'My Skills', section: 'skills' },
  { label: 'Learning Journey', section: 'journey' },
  { label: 'Project', path: '/project' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Reflection', path: '/reflection' },
]
