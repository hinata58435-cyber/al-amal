import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { PageIntro } from '@/components/page-intro'
import { departments, doctors } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'الأقسام الطبية',
  description: 'تعرّف على الأقسام الطبية في مستشفى الأمل بمكة المكرمة.',
}

export default function DepartmentsPage() {
  return (
    <>
      <PageIntro
        eyebrow="الأقسام"
        title="أقسامنا الطبية"
        description="أقسام متخصصة يقودها استشاريون ذوو خبرة، لتقديم رعاية شاملة لجميع أفراد الأسرة."
      />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((d) => {
            const count = doctors.filter((doc) => doc.department === d.slug).length
            return (
              <li key={d.slug} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-xl font-bold text-card-foreground">{d.name}</h2>
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                    {count} {count === 1 ? 'طبيب' : 'أطباء'}
                  </span>
                </div>
                <p className="leading-relaxed text-muted-foreground">{d.description}</p>
                <ul className="flex flex-col gap-2">
                  {d.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="size-4 text-primary" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  <Link
                    href={`/booking?department=${d.slug}`}
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                  >
                    احجز في القسم
                  </Link>
                  <Link
                    href={`/doctors?department=${d.slug}`}
                    className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted"
                  >
                    أطباء القسم
                  </Link>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
