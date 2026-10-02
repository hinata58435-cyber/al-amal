import type { Metadata } from 'next'
import { Info } from 'lucide-react'
import { PageIntro } from '@/components/page-intro'
import { BookingForm } from '@/components/booking-form'
import { departments, doctors, hospital } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'حجز موعد',
  description: 'احجز موعدك في مستشفى الأمل بمكة المكرمة بسهولة عبر واتساب.',
}

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ department?: string; doctor?: string }>
}) {
  const { department, doctor } = await searchParams
  const initialDepartment = departments.some((d) => d.slug === department) ? department! : ''
  const initialDoctor = doctors.some((d) => d.id === doctor && d.department === initialDepartment) ? doctor! : ''

  return (
    <>
      <PageIntro
        eyebrow="حجز موعد"
        title="احجز موعدك بخطوات بسيطة"
        description="املأ البيانات التالية وسيتم إرسال طلبك مباشرة إلى فريق المواعيد عبر واتساب لتأكيده."
      />
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 lg:flex-row">
        <div className="flex-[2] rounded-2xl border border-border bg-card p-6 md:p-8">
          <BookingForm
            key={`${initialDepartment}-${initialDoctor}`}
            initialDepartment={initialDepartment}
            initialDoctor={initialDoctor}
          />
        </div>
        <aside className="flex flex-1 flex-col gap-4 rounded-2xl bg-secondary/60 p-6">
          <div className="flex items-center gap-2 text-primary">
            <Info className="size-5" aria-hidden="true" />
            <h2 className="font-bold">معلومات مهمة</h2>
          </div>
          <ul className="flex list-disc flex-col gap-2 ps-5 text-sm leading-relaxed text-muted-foreground">
            <li>سيتواصل معكم فريق المواعيد لتأكيد الموعد النهائي.</li>
            <li>يرجى الحضور قبل الموعد بـ 15 دقيقة مع إحضار الهوية.</li>
            <li>للحالات الطارئة، توجّهوا مباشرة إلى قسم الطوارئ.</li>
          </ul>
          <div className="mt-2 rounded-xl bg-card p-4 text-sm">
            <p className="text-muted-foreground">للحجز الهاتفي</p>
            <a href={`tel:${hospital.phoneTel}`} dir="ltr" className="block text-end text-lg font-bold text-primary">
              {hospital.phoneDisplay}
            </a>
          </div>
        </aside>
      </section>
    </>
  )
}
