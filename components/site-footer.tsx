import Link from 'next/link'
import { hospital, navLinks } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-start md:justify-between">
        <div className="flex max-w-sm flex-col gap-2">
          <p className="text-lg font-bold text-foreground">{hospital.name}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            رعاية صحية متكاملة بقلب رحيم في {hospital.city}.
          </p>
        </div>
        <nav aria-label="روابط التذييل">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-muted-foreground hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {hospital.name}. جميع الحقوق محفوظة.
      </div>
    </footer>
  )
}
