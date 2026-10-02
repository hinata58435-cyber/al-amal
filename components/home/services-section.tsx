import { Microscope, Siren, Stethoscope } from 'lucide-react'
import { services } from '@/lib/site-data'

const icons = { siren: Siren, stethoscope: Stethoscope, microscope: Microscope }

export function ServicesSection() {
  return (
    <section aria-labelledby="services-title" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-10 flex flex-col gap-3 text-center">
        <p className="text-sm font-semibold text-primary">خدماتنا</p>
        <h2 id="services-title" className="text-3xl font-bold text-foreground">
          خدمات طبية بجودة عالية
        </h2>
      </div>
      <ul className="grid gap-6 md:grid-cols-3">
        {services.map((s) => {
          const Icon = icons[s.icon]
          return (
            <li key={s.title} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold text-card-foreground">{s.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{s.description}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
