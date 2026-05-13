type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="section-shell section-space pb-10">
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h1 className="section-title">{title}</h1>
      <p className="section-copy mt-6">{description}</p>
    </section>
  );
}
