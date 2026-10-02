import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/site-data'

export function WhatsappButton() {
  return (
    <a
      href={whatsappLink('السلام عليكم، أرغب بالاستفسار عن خدمات مستشفى الأمل.')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span>تواصل واتساب</span>
    </a>
  )
}
