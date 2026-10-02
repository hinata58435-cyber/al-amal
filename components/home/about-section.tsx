import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

const points = ['اعتماد وجودة وفق المعايير الوطنية', 'أطباء استشاريون بخبرات طويلة', 'أجهزة طبية حديثة', 'مواقف واسعة وسهولة الوصول']

export function AboutSection() {
  return (
    <section aria-labelledby="about-title" className="bg-secondary/50">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 py-16 md:flex-row">
        <div className="relative aspect-[4/3] w-full flex-1 overflow-hidden rounded-2xl bg-muted">
          <Image src="/images/about.png" alt="غرفة كشف في مستشفى الأمل" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <p className="text-sm font-semibold text-primary">نبذة عنا</p>
          <h2 id="about-title" className="text-balance text-3xl font-bold text-foreground">
            رعاية تبدأ بالإنصات وتنتهي بالاطمئنان
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            تأسس مستشفى الأمل في مكة المكرمة ليكون وجهة موثوقة لأهالي المدينة وزوارها. نجمع بين الكفاءة الطبية والتعامل الإنساني، ونحرص على أن يجد كل مريض الرعاية المناسبة في الوقت المناسب.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-foreground">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <Link href="/departments" className="w-fit font-semibold text-primary underline-offset-4 hover:underline">
            استعرض أقسامنا الطبية ←
          </Link>
        </div>
      </div>
    </section>
  )
}
