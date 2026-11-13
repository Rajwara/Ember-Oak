import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";
import { galleryImages, site } from "@/content/site";
import { responsiveImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description: `The story, the fire and the people behind ${site.name}.`,
};

const values = [
  {
    title: "Fire First",
    text: "Every cut meets real flame. We cook over oak and charcoal, because nothing else gives that deep, smoky crust.",
  },
  {
    title: "Patience",
    text: "Our ribs smoke for up to twelve hours. Sauces simmer all afternoon. Good things take the time they need.",
  },
  {
    title: "Open Table",
    text: "Date night, team lunch or a family feast: everyone gets the same warm welcome and the same generous plate.",
  },
];

const chefImage = responsiveImage("dish-pork-ribs-with-sauce", {
  widths: [500, 800],
  fullWidth: 915,
  sizes: "(max-width: 991px) 100vw, 50vw",
});

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our story"
        title="Born from fire & oak"
        intro={`${site.name} is a modern Western smokehouse built around one simple idea: honest food, cooked slowly over real fire, served with the kind of hospitality that makes you want to stay for one more round.`}
      />

      <section className="eo-section tight">
        <div className="eo-container">
          <img
            src="/assets/images/chef-cooking-video-poster.jpg"
            alt="Chef searing a cut of beef in a hot pan"
            className="eo-wide-image"
          />
        </div>
      </section>

      <section className="eo-section">
        <div className="eo-container eo-split">
          <div>
            <h2 className="eo-h2">Where it started</h2>
            <p className="eo-text">
              {site.name} began with a backyard smoker, a stack of oak logs and a lot of weekends
              spent chasing the perfect brisket bark. Friends kept coming back for more, and the
              smoker kept getting bigger.
            </p>
            <p className="eo-text">
              Today our kitchen still runs on the same principles: choose great meat, respect the
              fire and never rush. The menu has grown to include tomahawk ribeyes, fall-off-the-bone
              baby back ribs and a truffle mac &amp; cheese people cross town for, but the heart of
              it hasn&apos;t changed.
            </p>
          </div>
          <img {...chefImage} alt="Pork ribs finished with a herb sauce" className="eo-image" />
        </div>
      </section>

      <section className="eo-section">
        <div className="eo-container">
          <h2 className="eo-h2">What we believe in</h2>
          <div className="eo-cards">
            {values.map((value, i) => (
              <div key={value.title} className="eo-card">
                <div className="eo-card-number">0{i + 1}</div>
                <h3 className="eo-h3">{value.title}</h3>
                <p className="eo-text">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="eo-section">
        <div className="eo-container eo-split reverse">
          <blockquote className="eo-quote">
            <p>
              &ldquo;Smoke is an ingredient. We treat it with the same care as salt, butter or the
              cut itself.&rdquo;
            </p>
            <cite>Head Chef, {site.name}</cite>
          </blockquote>
          <img
            {...galleryImages.beef}
            alt="Braised beef with greens on a stoneware plate"
            className="eo-image"
          />
        </div>
      </section>

      <section className="eo-section">
        <div className="eo-container eo-cta">
          <h2 className="eo-h2">Pull up a chair</h2>
          <p className="eo-text">
            Book a table for tonight, plan a celebration or just ask us what&apos;s coming off the
            smoker this week.
          </p>
          <a href="/contact" className="eo-button solid">
            Book a table
          </a>
        </div>
      </section>
    </PageShell>
  );
}
