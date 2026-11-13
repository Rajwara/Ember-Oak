import PageShell from "@/components/layout/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="eo-hero eo-not-found">
        <div className="eo-container">
          <span className="eo-tag">Error 404</span>
          <h1 className="eo-hero-title">This page went up in smoke</h1>
          <p className="eo-hero-intro">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
          </p>
          <p style={{ marginTop: 32 }}>
            <a href="/" className="eo-button">
              Back to home
            </a>
          </p>
        </div>
      </section>
    </PageShell>
  );
}
