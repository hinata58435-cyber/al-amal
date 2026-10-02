import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { hospital, whatsappLink } from '@/lib/site-data'

export function ContactSection() {
  const items = [
    { icon: Phone, label: 'الهاتف', value: hospital.phoneDisplay, href: `tel:${hospital.phoneTel}`, ltr: true },
    { icon: MessageCircle, label: 'واتساب', value: hospital.phoneDisplay, href: whatsappLink(), ltr: true, external: true },
    { icon: Mail, label: 'البريد الإلكتروني', value: hospital.email, href: `mailto:${hospital.email}`, ltr: true },
    { icon: MapPin, label: 'العنوان', value: hospital.address },
  ]

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row">
        <div className="flex flex-1 flex-col gap-4">
          <p className="text-sm font-semibold opacity-80">تواصل معنا</p>
          <h2 id="contact-title" className="text-3xl font-bold">
            نحن هنا لخدمتكم
          </h2>
          <p className="leading-relaxed opacity-90">
            للاستفسارات وحجز المواعيد، تواصلوا معنا عبر الهاتف أو واتساب، أو تفضلوا بزيارتنا.
          </p>
          <ul className="flex flex-col gap-3 pt-2">
            {hospital.hours.map((h) => (
              <li key={h.label} className="flex items-center gap-3">
                <Clock className="size-5 opacity-80" aria-hidden="true" />
                <span className="font-semibold">{h.label}:</span>
                <span className="opacity-90">{h.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <ul className="grid flex-1 gap-4 sm:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon
            const content = (
              <>
                <Icon className="size-6" aria-hidden="true" />
                <span className="text-sm opacity-80">{item.label}</span>
                <span className="font-semibold" dir={item.ltr ? 'ltr' : undefined}>
                  {item.value}
                </span>
              </>
            )
            const cls = 'flex h-full flex-col items-start gap-2 rounded-2xl bg-primary-foreground/10 p-5'
            return (
              <li key={item.label}>
                {item.href ? (
                  <a
                    href={item.href}
                    className={`${cls} transition-colors hover:bg-primary-foreground/20`}
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={cls}>{content}</div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
