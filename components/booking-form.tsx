'use client'

import { useState, type FormEvent } from 'react'
import { MessageCircle } from 'lucide-react'
import { departmentName, departments, doctors, whatsappLink } from '@/lib/site-data'

const fieldCls =
  'w-full rounded-lg border border-input bg-background px-3 py-2.5 text-foreground outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40'

export function BookingForm({ initialDepartment, initialDoctor }: { initialDepartment: string; initialDoctor: string }) {
  const [department, setDepartment] = useState(initialDepartment)
  const [doctor, setDoctor] = useState(initialDoctor)
  const [error, setError] = useState('')

  const deptDoctors = doctors.filter((d) => d.department === department)
  const today = new Date().toISOString().split('T')[0]

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const date = String(data.get('date') ?? '')
    const period = String(data.get('period') ?? '')
    const notes = String(data.get('notes') ?? '').trim()

    if (!/^05\d{8}$/.test(phone)) {
      setError('يرجى إدخال رقم جوال صحيح يبدأ بـ 05 ويتكون من 10 أرقام.')
      return
    }
    setError('')

    const doctorName = doctors.find((d) => d.id === doctor)?.name ?? 'أي طبيب متاح'
    const message = [
      'السلام عليكم، أرغب بحجز موعد في مستشفى الأمل:',
      `الاسم: ${name}`,
      `الجوال: ${phone}`,
      `القسم: ${departmentName(department)}`,
      `الطبيب: ${doctorName}`,
      `التاريخ: ${date}`,
      `الفترة: ${period}`,
      notes ? `ملاحظات: ${notes}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate={false}>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            الاسم الكامل
          </label>
          <input id="name" name="name" required autoComplete="name" className={fieldCls} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            رقم الجوال
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            required
            dir="ltr"
            placeholder="05xxxxxxxx"
            autoComplete="tel"
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? 'phone-error' : undefined}
            className={`${fieldCls} text-end`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="department" className="text-sm font-medium text-foreground">
            القسم
          </label>
          <select
            id="department"
            name="department"
            required
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value)
              setDoctor('')
            }}
            className={fieldCls}
          >
            <option value="" disabled>
              اختر القسم
            </option>
            {departments.map((d) => (
              <option key={d.slug} value={d.slug}>
                {d.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="doctor" className="text-sm font-medium text-foreground">
            الطبيب
          </label>
          <select
            id="doctor"
            name="doctor"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            disabled={!department}
            className={`${fieldCls} disabled:opacity-60`}
          >
            <option value="">أي طبيب متاح</option>
            {deptDoctors.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="date" className="text-sm font-medium text-foreground">
            التاريخ المفضل
          </label>
          <input id="date" name="date" type="date" required min={today} className={fieldCls} />
        </div>
        <fieldset className="flex flex-col gap-2">
          <legend className="mb-2 text-sm font-medium text-foreground">الفترة</legend>
          <div className="flex gap-3">
            {['صباحية', 'مسائية'].map((p, i) => (
              <label
                key={p}
                className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border border-input px-3 py-2.5 text-sm has-checked:border-primary has-checked:bg-secondary has-checked:text-secondary-foreground"
              >
                <input type="radio" name="period" value={p} defaultChecked={i === 0} className="accent-primary" />
                {p}
              </label>
            ))}
          </div>
        </fieldset>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="notes" className="text-sm font-medium text-foreground">
          ملاحظات (اختياري)
        </label>
        <textarea id="notes" name="notes" rows={3} className={fieldCls} />
      </div>

      {error && (
        <p id="phone-error" role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        إرسال طلب الحجز عبر واتساب
      </button>
    </form>
  )
}
