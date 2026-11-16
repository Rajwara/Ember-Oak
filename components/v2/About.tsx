import { about } from "@/content/site";
import BackgroundVideo from "@/components/ui/BackgroundVideo";

export default function About() {
  return (
    <div data-w-id="57d91b21-ba6a-a7ed-2ac2-be17d652de34" className="about-scroll-block">
      <div id="About" className="about-trigger"></div>
      <section className="about-section">
        <div className="w-layout-blockcontainer about-container w-container">
          <div className="about-block">
            <BackgroundVideo />
            <h2 className="about-heading">{about.heading}</h2>
          </div>
        </div>
      </section>
    </div>
  );
}
