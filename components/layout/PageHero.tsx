type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
};

/** Big title block at the top of inner pages, in the same style as the homepage hero. */
export default function PageHero({ eyebrow, title, intro, children }: Props) {
  return (
    <section className="eo-hero">
      <div className="eo-container">
        <span className="eo-tag">{eyebrow}</span>
        <h1 className="eo-hero-title">{title}</h1>
        {intro && <p className="eo-hero-intro">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
