import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";
import type { LegalDoc } from "@/content/legal";

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <PageShell>
      <PageHero eyebrow="Legal" title={doc.title} intro={doc.intro} />
      <section className="eo-section tight">
        <article className="eo-prose">
          <p className="eo-updated">Last updated: {doc.updated}</p>
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((text) => (
                <p key={text}>{text}</p>
              ))}
              {section.list && (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
      </section>
    </PageShell>
  );
}
