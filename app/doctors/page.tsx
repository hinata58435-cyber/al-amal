import type { Metadata } from 'next'
import Link from 'next/link'
import { CalendarDays } from 'lucide-react'
import { PageIntro } from '@/components/page-intro'
import { departmentName, departments, doctors } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'الأطباء',
  description: 'نخبة من الأطباء والاستشاريين في مستشفى الأمل بمكة المكرمة.',
}

export default async function DoctorsPage({
  searchParams,
}: {
  searchParams: Promise<{ department?: string }>
}) {
  const { department } = await searchParams
  const active = departments.some((d) => d.slug === department) ? department : undefined
  const list = active ? doctors.filter((d) => d.department === active) : doctors

  const filters = [{ slug: undefined, name: 'الكل' }, ...departments]

  return (
    <>
      <PageIntro
        eyebrow="الأطباء"
        title="فريقنا الطبي"
        description="استشاريون وأخصائيون يجمعون بين الخبرة والاهتمام بكل تفاصيل رعايتكم."
      />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <nav aria-label="تصفية حسب القسم" className="mb-8">
          <ul className="flex flex-wrap gap-2">
            {filters.map((f) => {
              const isActive = f.slug === active
              return (
                <li key={f.name}>
                  <Link
                    href={f.slug ? `/doctors?department=${f.slug}` : '/doctors'}
                    aria-current={isActive ? 'page' : undefined}
                    scroll={false}
                    className={cn(
                      'block rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                      isActive
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border bg-card text-foreground hover:bg-muted',
                    )}
                  >
                    {f.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((doc) => {
            const initials = doc.name.replace('د. ', '').split(' ').map((p) => p.replace('ال', '')[0]).join(' ')
            return (
              <li key={doc.id} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex size-14 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-primary"
                  >
                    {initials}
                  </span>
                  <div className="flex flex-col">
                    <h2 className="text-lg font-bold text-card-foreground">{doc.name}</h2>
                    <p className="text-sm text-muted-foreground">{doc.title}</p>
                  </div>
                </div>
                <dl className="grid grid-cols-2 gap-3 rounded-xl bg-muted/60 p-3 text-sm">
                  <div>
                    <dt className="text-muted-foreground">القسم</dt>
                    <dd className="font-semibold text-foreground">{departmentName(doc.department)}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">الخبرة</dt>
                    <dd className="font-semibold text-foreground">{doc.experience} سنة</dd>
                  </div>
                  <div className="col-span-2 flex items-center gap-2">
                    <CalendarDays className="size-4 text-primary" aria-hidden="true" />
                    <dt className="sr-only">أيام العيادة</dt>
                    <dd className="text-foreground">{doc.days}</dd>
                  </div>
                </dl>
                <Link
                  href={`/booking?department=${doc.department}&doctor=${doc.id}`}
                  className="mt-auto rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  احجز مع الطبيب
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
