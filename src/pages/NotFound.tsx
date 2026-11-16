import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="wrap flex min-h-[70vh] flex-col items-start justify-center pt-[72px]">
      <p className="label text-muted">Page not found</p>
      <h1 className="display mt-6 text-[clamp(3rem,10vw,7rem)]">Off the page</h1>
      <p className="mt-6 max-w-md text-lg text-muted">This page doesn’t exist. The journey continues from the home page.</p>
      <Link to="/" className="btn-dark mt-10">
        Back to home
      </Link>
    </section>
  )
}
