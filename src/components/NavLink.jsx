import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg py-1 px-2 text-xl text-blue-50 hover:scale-105 hover:text-blue-300"
    >
      {children}
    </Link>
  )
}
