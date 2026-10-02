export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="bg-secondary/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-12">
        <p className="text-sm font-semibold text-primary">{eyebrow}</p>
        <h1 className="text-balance text-3xl font-bold text-foreground md:text-4xl">{title}</h1>
        <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </section>
  )
}
