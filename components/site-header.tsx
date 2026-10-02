'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { HeartPulse, Menu, X } from 'lucide-react'
import { hospital, navLinks } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <HeartPulse className="size-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold text-foreground">{hospital.name}</span>
        </Link>

        <nav aria-label="القائمة الرئيسية" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href
              const isCta = link.href === '/booking'
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                      isCta
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : active
                          ? 'bg-secondary text-secondary-foreground'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-lg text-foreground hover:bg-muted md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          <span className="sr-only">{open ? 'إغلاق القائمة' : 'فتح القائمة'}</span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="القائمة الرئيسية" className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  className={cn(
                    'block rounded-lg px-3 py-2.5 font-medium',
                    pathname === link.href ? 'bg-secondary text-secondary-foreground' : 'text-foreground hover:bg-muted',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
