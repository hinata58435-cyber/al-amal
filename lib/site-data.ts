export const hospital = {
  name: 'مستشفى الأمل',
  city: 'مكة المكرمة',
  phoneDisplay: '05xxxxxxxx',
  phoneTel: '05xxxxxxxx',
  whatsappIntl: '9665xxxxxxxx',
  email: 'info@alamal-hospital.sa',
  address: 'حي العزيزية، طريق الملك عبدالله، مكة المكرمة',
  hours: [
    { label: 'الطوارئ', value: 'على مدار 24 ساعة' },
    { label: 'العيادات الخارجية', value: 'السبت – الخميس، 8 ص – 10 م' },
  ],
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${hospital.whatsappIntl}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export type Department = {
  slug: string
  name: string
  description: string
  features: string[]
}

export const departments: Department[] = [
  {
    slug: 'emergency',
    name: 'الطوارئ',
    description: 'قسم طوارئ مجهّز يعمل على مدار الساعة لاستقبال الحالات الحرجة والإسعافية.',
    features: ['استقبال 24/7', 'فرز سريع للحالات', 'غرف إنعاش مجهزة'],
  },
  {
    slug: 'internal',
    name: 'الباطنية',
    description: 'تشخيص وعلاج أمراض الجهاز الهضمي والسكري والضغط والأمراض المزمنة.',
    features: ['متابعة الأمراض المزمنة', 'مناظير الجهاز الهضمي', 'تثقيف صحي'],
  },
  {
    slug: 'pediatrics',
    name: 'طب الأطفال',
    description: 'رعاية صحية شاملة للأطفال من حديثي الولادة حتى سن المراهقة.',
    features: ['التطعيمات', 'متابعة النمو', 'حضانة حديثي الولادة'],
  },
  {
    slug: 'obgyn',
    name: 'النساء والولادة',
    description: 'متابعة الحمل والولادة الطبيعية والقيصرية ورعاية صحة المرأة.',
    features: ['متابعة الحمل', 'غرف ولادة خاصة', 'عيادات صحة المرأة'],
  },
  {
    slug: 'cardiology',
    name: 'القلب',
    description: 'تشخيص وعلاج أمراض القلب والأوعية الدموية بأحدث التقنيات.',
    features: ['تخطيط وإيكو القلب', 'اختبار الجهد', 'عيادة الضغط'],
  },
  {
    slug: 'orthopedics',
    name: 'العظام',
    description: 'علاج الكسور وإصابات الملاعب وآلام المفاصل والعمود الفقري.',
    features: ['جراحة المناظير', 'العلاج الطبيعي', 'تبديل المفاصل'],
  },
]

export type Doctor = {
  id: string
  name: string
  title: string
  department: string
  experience: number
  days: string
}

export const doctors: Doctor[] = [
  { id: 'd1', name: 'د. عبدالله الحربي', title: 'استشاري طب الطوارئ', department: 'emergency', experience: 15, days: 'يومياً' },
  { id: 'd2', name: 'د. سارة الغامدي', title: 'استشارية الباطنية والسكري', department: 'internal', experience: 12, days: 'السبت – الأربعاء' },
  { id: 'd3', name: 'د. فهد الزهراني', title: 'أخصائي الجهاز الهضمي', department: 'internal', experience: 9, days: 'الأحد – الخميس' },
  { id: 'd4', name: 'د. نورة القرشي', title: 'استشارية طب الأطفال', department: 'pediatrics', experience: 14, days: 'السبت – الخميس' },
  { id: 'd5', name: 'د. مها العتيبي', title: 'استشارية النساء والولادة', department: 'obgyn', experience: 18, days: 'السبت – الأربعاء' },
  { id: 'd6', name: 'د. خالد الشريف', title: 'استشاري أمراض القلب', department: 'cardiology', experience: 20, days: 'الأحد – الخميس' },
  { id: 'd7', name: 'د. ريم المالكي', title: 'أخصائية القلب والضغط', department: 'cardiology', experience: 8, days: 'السبت – الثلاثاء' },
  { id: 'd8', name: 'د. ماجد السلمي', title: 'استشاري جراحة العظام', department: 'orthopedics', experience: 16, days: 'السبت – الخميس' },
]

export function departmentName(slug: string) {
  return departments.find((d) => d.slug === slug)?.name ?? ''
}

export const services = [
  {
    title: 'طوارئ على مدار الساعة',
    description: 'فريق طبي جاهز في كل وقت لاستقبال الحالات الطارئة بسرعة واحترافية.',
    icon: 'siren',
  },
  {
    title: 'عيادات تخصصية',
    description: 'نخبة من الاستشاريين في الباطنية والأطفال والنساء والقلب والعظام.',
    icon: 'stethoscope',
  },
  {
    title: 'مختبر وأشعة',
    description: 'تحاليل مخبرية دقيقة وأشعة رقمية بنتائج سريعة وموثوقة.',
    icon: 'microscope',
  },
] as const

export const navLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/departments', label: 'الأقسام' },
  { href: '/doctors', label: 'الأطباء' },
  { href: '/booking', label: 'حجز موعد' },
]
