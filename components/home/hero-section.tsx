import Image from 'next/image'
import Link from 'next/link'
import { CalendarCheck, Users } from 'lucide-react'
import { hospital } from '@/lib/site-data'

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="mx-auto max-w-6xl px-4 py-12 md:py-20">
      <div className="flex flex-col items-center gap-10 md:flex-row">
        <div className="flex flex-1 flex-col gap-6">
          <p className="w-fit rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
            {hospital.city}
          </p>
          <h1 id="hero-title" className="text-balance text-4xl font-bold leading-tight text-foreground md:text-5xl">
            أهلاً بكم في {hospital.name}
          </h1>
          <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            صحتكم أمانة لدينا. نقدّم رعاية طبية متكاملة بأيدي نخبة من الأطباء، في بيئة هادئة تليق بكم وبضيوف الرحمن.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <CalendarCheck className="size-5" aria-hidden="true" />
              احجز موعدك
            </Link>
            <Link
              href="/doctors"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <Users className="size-5" aria-hidden="true" />
              تعرّف على أطبائنا
            </Link>
          </div>
          <dl className="flex flex-wrap gap-8 pt-4">
            {[
              { k: '+25', v: 'عاماً من الخبرة' },
              { k: '+40', v: 'طبيباً واستشارياً' },
              { k: '24/7', v: 'خدمة الطوارئ' },
            ].map((s) => (
              <div key={s.v} className="flex flex-col">
                <dt className="sr-only">{s.v}</dt>
                <dd className="text-2xl font-bold text-primary">{s.k}</dd>
                <dd className="text-sm text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative aspect-[4/3] w-full flex-1 overflow-hidden rounded-2xl bg-muted">
          <Image
            src="/images/hero.png"
            alt="ردهة استقبال مستشفى الأمل"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
